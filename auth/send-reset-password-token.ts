import { z } from 'zod';
export const SendResetPasswordTokenRequestSchema = z.object({
  email: z.string().email(),
});

export type SendResetPasswordTokenRequest = z.infer<
  typeof SendResetPasswordTokenRequestSchema
>;
export type SendResetPasswordTokenResponse = true;
