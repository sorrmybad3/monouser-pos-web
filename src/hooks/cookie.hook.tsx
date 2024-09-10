import { useCookies } from 'react-cookie';
import { CookiesName } from '@/utils/constants/cookies.constants';

export function useCookiesManager() {
  const [_, setCookie, removeCookie] = useCookies();
  const addCokkie = (tokenName: CookiesName, token: any) => {
    setCookie(tokenName, token, {
      path: '/',
      maxAge: 3600,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
  };

  const deleteCookie = (tokenName: CookiesName) => {
    removeCookie(tokenName);
  };

  return { addCokkie, deleteCookie };
}
