import { z } from 'zod';
import { PasswordSchema } from './password';
export const ResetPasswordRequestSchema = PasswordSchema.extend({});

export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;
export type ResetPasswordResponse = true;
