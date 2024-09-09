import { main } from '../main.client';

export const getAuthToken = async (email: string, password: string) => {
  const response = await main.post('/auth/login', { email, password });
  return response?.body?.token;
};
