import { z } from 'zod';
import { PasswordSchema } from './password';

export const ChangePasswordRequestSchema = PasswordSchema.extend({
  oldPassword: z.string().min(8, {
    message: 'Old password confirm must be at least 8 characters long',
  }),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: `Passwords not match`,
    path: ['confirmPassword'],
  })
  .refine((data) => data.password !== data.oldPassword, {
    message: `Password must be different from the previous`,
    path: ['password'],
  });

export const ChangePasswordResponseSchema = z.object({
  accessToken: z.string().min(5),
});

export type ChangePasswordRequest = z.infer<typeof ChangePasswordRequestSchema>;
export type ChangePasswordResponse = z.infer<typeof ChangePasswordResponseSchema>;
