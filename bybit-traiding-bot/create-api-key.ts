import { z } from 'zod';

export const CreateApiKeyRequestSchema = z.object({
  apiKeyName: z.string().min(1, 'Required'),
  apiKey: z.string().min(1, 'Required'),
  apiSecret: z.string().min(1, 'Required'),
});

export type CreateApiKeyRequest = z.infer<typeof CreateApiKeyRequestSchema>;
