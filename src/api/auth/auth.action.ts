import { AuthResponse } from '@/types/auth.type';
import { main } from '../main.client';

export const getAuthToken = async (email: string, password: string) => {
  const response = await main.post('/auth/login', { email, password });
  const body: AuthResponse = response.body;
  return body?.access_token;
};
