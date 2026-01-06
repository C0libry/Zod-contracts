import { z } from 'zod';

export const AutoBalanceBotAssetSchema = z.object({
  symbol: z.string().min(1, 'Required'),
  side: z.enum(['Buy', 'Sell']),
  targetWeight: z.number().min(0), // example: 10%
});

export const CreateAutoBalanceBotRequestSchema = z.object({
  startBalance: z.number().min(0), // example: 100$
  rebalanceTarget: z.number().min(0), // example: 3%
  assets: z.array(AutoBalanceBotAssetSchema).min(1),
});

export const CreateAutoBalanceBotWithUserIdRequestSchema = z.object({
  userId: z.string().uuid(),
  params: CreateAutoBalanceBotRequestSchema,
});

export type CreateAutoBalanceBotRequest = z.infer<typeof CreateAutoBalanceBotRequestSchema>;

export type CreateAutoBalanceBotWithUserIdRequest = z.infer<
  typeof CreateAutoBalanceBotWithUserIdRequestSchema
>;
