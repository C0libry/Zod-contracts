import { z } from 'zod';

export const CreareTokenRequestSchema = z.object({
  userId: z.string().uuid('Must be uuid'),
  token: z.string(),
  isActive: z.boolean(),
});

export type CreareTokenRequest = z.infer<typeof CreareTokenRequestSchema>;
