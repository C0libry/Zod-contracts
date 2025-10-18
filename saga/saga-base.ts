import { z } from 'zod';

export const SagaBaseSchema = z.object({
  eventId: z.string().uuid(),
  payload: z.unknown(),
  saga: z.boolean(),
});

export type SagaBase = z.infer<typeof SagaBaseSchema>;
