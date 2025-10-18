import { z } from 'zod';

export const SetOrdersGridRequestSchema = z.object({
  symbol: z.string().min(1, 'Required'),
  side: z.enum(['Buy', 'Sell']),
  quantity: z.number().min(0),
  deltaPrice: z.number().min(0).max(100),
  closePosition: z.boolean().default(false),
  orderQuantity: z.number().int().min(1).max(100),
  startPrice: z.number().min(0).optional(),
  quantityMultiplier: z.number().min(0.5).max(3).optional(),
});

export const SetOrdersGridWithUserIdRequestSchema = z.object({
  userId: z.string().uuid(),
  params: SetOrdersGridRequestSchema,
});

export type SetOrdersGridRequest = z.infer<typeof SetOrdersGridRequestSchema>;

export type SetOrdersGridWithUserIdRequest = z.infer<typeof SetOrdersGridWithUserIdRequestSchema>;
