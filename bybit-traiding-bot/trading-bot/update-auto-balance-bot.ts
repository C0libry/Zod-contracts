import { z } from 'zod';
import { AutoBalanceBotAssetSchema } from './create-auto-balance-bot';

export const UpdateAutoBalanceBotRequestSchema = z.object({
  addBalnce: z.number(),
  rebalanceTarget: z.number().min(0),
  assets: z.array(AutoBalanceBotAssetSchema).min(1),
});

export const UpdateAutoBalanceBotWithUserIdRequestSchema = z.object({
  userId: z.string().uuid(),
  params: UpdateAutoBalanceBotRequestSchema,
});

export type UpdateAutoBalanceBotRequest = z.infer<typeof UpdateAutoBalanceBotRequestSchema>;

export type UpdateAutoBalanceBotWithUserIdRequest = z.infer<
  typeof UpdateAutoBalanceBotWithUserIdRequestSchema
>;
