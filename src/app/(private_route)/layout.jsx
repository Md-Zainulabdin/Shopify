import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const Privatelayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session)  redirect('/auth/Login')
  return <>{children}</>;
};

export default Privatelayout;
