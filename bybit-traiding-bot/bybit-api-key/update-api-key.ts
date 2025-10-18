import { z } from 'zod';

export const UpdateApiKeyRequestSchema = z.object({
  apiKeyName: z.string().min(1, 'Required'),
  newApiKeyName: z.string().min(1, 'Required').optional(),
  apiKey: z.string().min(1, 'Required').optional(),
  apiSecret: z.string().min(1, 'Required').optional(),
  isDemoKey: z.boolean().optional(),
});

export type UpdatApiKeyRequest = z.infer<typeof UpdateApiKeyRequestSchema>;
