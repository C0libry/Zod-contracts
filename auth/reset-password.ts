import { z } from 'zod';
export const ResetPasswordRequestSchema = z.object({
  email: z.string().email(),
});

export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;
export type ResetPasswordResponse = boolean;
