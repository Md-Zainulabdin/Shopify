import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const ClientLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (session) redirect('/')
  return <>{children}</>;
};

export default ClientLayout;
