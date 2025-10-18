import { z } from 'zod';
import { UserProfileResponseSchema } from './user-profile';

export const LoginAccessTokenResponseSchema = z.object({
  user: UserProfileResponseSchema,
  accessToken: z.string().min(5),
});
export type LoginAccessTokenResponse = z.infer<typeof LoginAccessTokenResponseSchema>;
