import { z } from 'zod';
import { UserProfileResponseSchema } from './user-profile';

export const UpdateUserRequestSchema = z.object({
  email: z.string().email().optional(),
  username: z
    .string()
    .regex(
      /^(?!.*\W)(?!.*\s).{3,}$/,
      `Username must be at least 3 characters long, Username cannot contain a special character and spaces`,
    )
    .optional(),
  name: z.string().min(1, 'Required').optional(),
});

export const UpdateUserResponseSchema = UserProfileResponseSchema.extend({});

export type UpdateUserRequest = z.infer<typeof UpdateUserRequestSchema>;

export type UpdateUserResponse = z.infer<typeof UpdateUserResponseSchema>;
