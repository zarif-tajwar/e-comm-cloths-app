import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton';

const AccountPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/my-account');
  }
  return (
    <div>
      <main className="container-main">
        <div className="grid max-w-sm grid-cols-2 gap-2">
          <div>Name</div>
          <div>{session.user.name}</div>
          <div>Email</div>
          <div>{session.user.email}</div>
        </div>
        <LogoutButton
          handleLogout={async () => {
            'use server';
            await signOut({ redirectTo: '/shop' });
          }}
        />
      </main>
    </div>
  );
};
export default AccountPage;
