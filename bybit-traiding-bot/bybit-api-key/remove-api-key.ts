import { z } from 'zod';

export const RemoveApiKeyRequestSchema = z.object({
  userId: z.string().uuid().optional(),
  apiKeyName: z.string().min(1, 'Required'),
});

export type RemoveApiKeyRequest = z.infer<typeof RemoveApiKeyRequestSchema>;
