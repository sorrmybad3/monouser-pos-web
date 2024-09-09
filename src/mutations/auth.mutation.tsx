import { useMutation } from '@tanstack/react-query';
import { getAuthToken } from '@/api/auth/auth.action';

export const useAuthMutations = () => {
  // Mutation for logging in
  const loginMutation = useMutation({
    mutationFn: (data: { email: string; password: string }) => {
      return getAuthToken(data.email, data.password);
    },
  });

  return {
    loginMutation,
  };
};
