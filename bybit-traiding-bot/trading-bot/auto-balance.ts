import { z } from 'zod';

export const CreateAutoBalanceBotRequestSchema = z.object({
  startBalance: z.number().min(0),
  rebalanceTarget: z.number().min(0),
  assets: z
    .array(
      z.object({
        symbol: z.string().min(1, 'Required'),
        side: z.enum(['Buy', 'Sell']),
        targetWeight: z.number().min(0),
      }),
    )
    .min(1),
});

export const CreateAutoBalanceBotWithUserIdRequestSchema = z.object({
  userId: z.string().uuid(),
  params: CreateAutoBalanceBotRequestSchema,
});

export type CreateAutoBalanceBotRequest = z.infer<typeof CreateAutoBalanceBotRequestSchema>;

export type CreateAutoBalanceBotWithUserIdRequest = z.infer<
  typeof CreateAutoBalanceBotWithUserIdRequestSchema
>;
