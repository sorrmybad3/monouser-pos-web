import { createContext } from 'react';

export type AuthContextType = {
  user: any;
  login: (user: any) => void;
  logout: () => void;
};

const AuthInitialValue: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(AuthInitialValue);
