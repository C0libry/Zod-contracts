import { z } from 'zod';

export const SetDefaultApiKeyRequestSchema = z.object({
  apiKeyId: z.string().uuid(),
});

export const SetDefaultApiKeyWithUserIdRequestSchema = SetDefaultApiKeyRequestSchema.extend({
  id: z.string().uuid(),
});

export type SetDefaultApiKeyRequest = z.infer<typeof SetDefaultApiKeyRequestSchema>;

export type SetDefaultApiKeyWithUserIdRequest = z.infer<
  typeof SetDefaultApiKeyWithUserIdRequestSchema
>;
