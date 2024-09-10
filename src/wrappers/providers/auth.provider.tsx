import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/auth.context';
import { useCookiesManager } from '@/hooks/cookie.hook';
import { useAuthMutations } from '@/mutations/auth.mutation';
import { CookiesName } from '@/utils/constants/cookies.constants';

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { loginMutation } = useAuthMutations();
  const { addCokkie, deleteCookie } = useCookiesManager();

  const login = ({ email, password }: { email: string; password: string }) => {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (token) => {
          setUser(true);
          addCokkie(CookiesName.AUTH_TOKEN, token);
          navigate('/dashboard/overview', { replace: true });
        },
        onError: (_) => {
          deleteCookie(CookiesName.AUTH_TOKEN);
        },
      }
    );
  };

  const logout = () => {
    deleteCookie(CookiesName.AUTH_TOKEN);
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
