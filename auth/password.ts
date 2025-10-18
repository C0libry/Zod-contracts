import { z } from 'zod';

export const PasswordSchema = z.object({
  password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/, {
    message: `Password must be at least 8 characters long, must contain one lowercase letter, must contain one uppercase letter, must contain one special character and dont'n must contain space characters`,
  }),
  confirmPassword: z.string().min(8, {
    message: 'Password confirm must be at least 8 characters long',
  }),
});
