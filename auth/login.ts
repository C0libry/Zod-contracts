import { z } from 'zod';
import { UserProfileResponseSchema } from './user-profile';

export const UserLoginRequestSchema = z.object({
  emailOrUsername: z.string().min(3, {
    message: 'Must be at least 3 characters long',
  }),
  password: z.string().min(8, {
    message: `Must be at least 8 characters long`,
  }),
});

export const UserLoginResponseSchema = z.object({
  user: UserProfileResponseSchema,
  accessToken: z.string().min(5),
});

export type UserLoginRequest = z.infer<typeof UserLoginRequestSchema>;
export type UserLoginResponse = z.infer<typeof UserLoginResponseSchema>;
