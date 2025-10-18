import { z } from 'zod';
import { FindUserResponseSchema } from '../../auth';
import { SagaBaseSchema } from '../../saga/saga-base';

export const CreateUserRequestSchema = SagaBaseSchema.extend({
  payload: FindUserResponseSchema.omit({
    createdAt: true,
  }),
});

export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;
