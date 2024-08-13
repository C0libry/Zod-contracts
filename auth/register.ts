import { z } from 'zod';
import { UserLoginResponseSchema } from './login';
import { PasswordSchema } from './password';

export const UserRegisterRequestSchema = PasswordSchema.extend({
  email: z.string().email(),
  username: z.string().regex(/^(?!.*\W)(?!.*\s).{3,}$/, {
    message: `Username must be at least 3 characters long, Username cannot contain a special character and spaces`,
  }),
  name: z.string().min(1, 'required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: `Passwords not match`,
  path: ['confirmPassword'],
});

export const UserRegisterResponseSchema = UserLoginResponseSchema.extend({});

export type UserRegisterRequest = z.infer<typeof UserRegisterRequestSchema>;
export type UserRegisterResponse = z.infer<typeof UserRegisterResponseSchema>;
