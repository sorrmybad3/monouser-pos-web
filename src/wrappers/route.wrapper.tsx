import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/auth.hook';

export const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
