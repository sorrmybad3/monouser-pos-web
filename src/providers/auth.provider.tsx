import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/auth.context';

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const login = (loggedInUser: boolean) => {
    setUser(loggedInUser);
    navigate('/dashboard', { replace: true });
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
