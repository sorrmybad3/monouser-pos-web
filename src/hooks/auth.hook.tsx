import { useContext } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { AuthContext } from '@/context/auth.context';
import { LoginZodSchema } from '@/zod/auth.zod';

export function useAuth() {
  return useContext(AuthContext);
}

export function useLoginForm() {
  const { login } = useAuth();
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(LoginZodSchema),
    validateInputOnChange: true,
  });

  return {
    form,
    login,
  };
}
