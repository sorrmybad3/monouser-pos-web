import { createContext } from 'react';

export type AuthContextType = {
  user: any;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthInitialValue: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(AuthInitialValue);
