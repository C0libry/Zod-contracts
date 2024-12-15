import { z } from 'zod';

export const RemoveApiKeyRequestSchema = z.object({
  apiKeyName: z.string().min(1, 'Required'),
});

export const RemoveApiKeyWithUserIdRequestSchema =
  RemoveApiKeyRequestSchema.extend({ userId: z.string().uuid() });

export type RemoveApiKeyRequest = z.infer<typeof RemoveApiKeyRequestSchema>;

export type RemoveApiKeyWithUserIdRequest = z.infer<
  typeof RemoveApiKeyWithUserIdRequestSchema
>;
