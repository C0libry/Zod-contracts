import { z } from 'zod';
import { FindUserResponseSchema } from '../../auth';

export const CreateUserRequestSchema = FindUserResponseSchema.omit({
  createdAt: true,
});

export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;
