import { main } from '../main.client';

export const login = (email: string, password: string) => {
  return main.post('/auth/login', { email, password });
};
