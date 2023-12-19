import NextAuth, { type NextAuthConfig } from 'next-auth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import FacebookProvider, {
  FacebookProfile,
} from 'next-auth/providers/facebook';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './lib/db';
import { pgDrizzleAdapter } from './PgDrizzleAdapter';
import { UserSelect } from '@/lib/db/schema/auth';
import 'dotenv/config';

// export const authAdapter = DrizzleAdapter(db);
export const authAdapter = pgDrizzleAdapter(db);

const getRole = (email: string): UserSelect['role'] => {
  if (email === process.env.ADMIN_EMAIL) return 'ADMIN';
  if (email === process.env.STAFF_EMAIL) return 'STAFF';
  return 'USER';
};

const authConfig = {
  providers: [
    GoogleProvider({
      profile: (profile: GoogleProfile) => {
        console.log(profile, 'GOOGLE PROFILE');
        return {
          id: profile.sub,
          name: profile.name,
          image: profile.picture,
          email: profile.email,
          role: getRole(profile.email),
        };
      },
    }),
    FacebookProvider({
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.name,
          image: profile.picture.data.url,
          email: profile.email,
          role: getRole(profile.email),
        };
      },
    }),
  ],
  adapter: authAdapter,
  callbacks: {
    session: async ({ session, user }) => {
      const dbUser = user as UserSelect;
      session.user.id = user.id;
      session.user.role = dbUser.role;
      return session;
    },
  },
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-out',
  },
  trustHost: true,
} satisfies NextAuthConfig;

export const { auth, handlers, signOut, signIn, update } = NextAuth(authConfig);
