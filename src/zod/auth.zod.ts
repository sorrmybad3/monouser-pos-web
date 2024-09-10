import { z } from 'zod';

//TODO: Extract type from this.
export const LoginZodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});
