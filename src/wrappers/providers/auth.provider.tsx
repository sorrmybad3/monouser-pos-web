import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/auth.context';
import { useAuthMutations } from '@/mutations/auth.mutation';

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { loginMutation } = useAuthMutations();

  const login = (email: string, password: string) => {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (_) => {
          setUser(true); // Update user state to indicate login success
          navigate('/dashboard', { replace: true }); // Redirect to the dashboard
        },
        onError: (_) => {},
      }
    );
  };

  const logout = () => {
    setUser(null);
    navigate('/login', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
