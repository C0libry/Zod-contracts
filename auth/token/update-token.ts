import { z } from 'zod';

export const UpdateTokenRequestSchema = z.object({
  token: z.string(),
  isActive: z.boolean(),
});

export type UpdateTokenRequest = z.infer<typeof UpdateTokenRequestSchema>;
