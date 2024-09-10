import { createContext } from 'react';
import { AuthContextType } from '@/types/auth.type';

const AuthInitialValue: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(AuthInitialValue);
