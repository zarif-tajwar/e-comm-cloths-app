import NextAuth, { type NextAuthConfig } from 'next-auth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { temporaryAdapter } from './temporaryAdapter';
import { UserSelect, accounts, user as userTable } from '@/lib/db/schema/auth';
import 'dotenv/config';
import { parseIntWithUndefined, wait } from './lib/util';
import { db } from './lib/db';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { carts } from './lib/db/schema/carts';

// export const authAdapter = DrizzleAdapter(db);
export const authAdapter = temporaryAdapter();

const getRole = (email: string): UserSelect['role'] => {
  if (email === process.env.ADMIN_EMAIL) return 'ADMIN';
  if (email === process.env.STAFF_EMAIL) return 'STAFF';
  return 'USER';
};

const authConfig = {
  providers: [
    GoogleProvider({
      profile: (profile: GoogleProfile) => {
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

      const cartId = (
        await db
          .select({ cartId: carts.id })
          .from(carts)
          .where(eq(carts.userId, user.id))
      )?.at(0)?.cartId;

      session.user.cartId = cartId;

      console.log(session.user.cartId);

      return session;
    },
  },
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-out',
    error: '/auth/error',
  },
  events: {
    signIn: async ({ user }) => {
      let cartIdFromCookies = parseIntWithUndefined(
        cookies().get('cartId')?.value || '',
      );
      await db.transaction(async (tx) => {
        let userCartId: number | undefined = undefined;
        const userCartIdDbCall = tx
          .select({ cartId: carts.id })
          .from(carts)
          .innerJoin(userTable, eq(userTable.id, carts.userId))
          .where(eq(userTable.id, user.id));

        if (cartIdFromCookies) {
          const validateCookieCart = tx
            .select()
            .from(carts)
            .where(eq(carts.id, cartIdFromCookies));

          const res = await Promise.allSettled([
            userCartIdDbCall,
            validateCookieCart,
          ]);
          if (res[0].status === 'fulfilled') {
            userCartId = res[0].value?.at(0)?.cartId;
          }
          if (res[1].status === 'fulfilled') {
            const validatedCookieCart = res[1].value?.at(0);
            if (!validatedCookieCart) {
              cartIdFromCookies = undefined;
            }
            if (
              validatedCookieCart?.userId &&
              validatedCookieCart.userId !== user.id
            ) {
              cartIdFromCookies = undefined;
            }
          }
        } else {
          userCartId = (await userCartIdDbCall)?.at(0)?.cartId;
        }

        if (userCartId && userCartId === cartIdFromCookies) {
          cookies().delete('cartId');
          tx.rollback();
          return;
        }

        if (cartIdFromCookies && userCartId !== cartIdFromCookies) {
          if (userCartId)
            await tx.delete(carts).where(eq(carts.id, userCartId));

          await tx
            .update(carts)
            .set({ userId: user.id })
            .where(eq(carts.id, cartIdFromCookies));
        }

        if (!cartIdFromCookies && !userCartId) {
          await tx.insert(carts).values({ userId: user.id });
        }

        if (cookies().has('cartId')) cookies().delete('cartId');
      });
    },
    linkAccount: async ({ profile, account }) => {
      // inserts email and name into provider account.
      // these extra database calls wouldn't be necessary if auth js supported custom logic
      // or provided the oauth profile object while creating an account
      db.transaction(async (tx) => {
        const extraInfo = (
          await tx
            .select({
              name: accounts.name,
              email: accounts.email,
            })
            .from(accounts)
            .where(eq(accounts.providerAccountId, account.providerAccountId))
        )[0];

        if (extraInfo && extraInfo.email && extraInfo.name) {
          await tx.rollback();
          return;
        }

        await tx
          .update(accounts)
          .set({
            email: profile.email,
            name: profile.name,
          })
          .where(eq(accounts.providerAccountId, account.providerAccountId));
      });
    },
  },
  trustHost: true,
} satisfies NextAuthConfig;

export const { auth, handlers, signOut, signIn, update } = NextAuth(authConfig);
