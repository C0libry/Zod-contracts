import { z } from 'zod';
import { FindUserResponseSchema } from './find-user';

export const UserProfileResponseSchema = FindUserResponseSchema.extend({
  email: z.string().email(),
});

export type UserProfileResponse = z.infer<typeof UserProfileResponseSchema>;
