import { z } from 'zod';
import { PasswordSchema } from './password';
export const ResetPasswordRequestSchema = PasswordSchema.extend({
  resetPasswordToken: z
    .string()
    .regex(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/, {
      message: 'Invalid token',
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: `Passwords not match`,
  path: ['confirmPassword'],
});

export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;
export type ResetPasswordResponse = true;
