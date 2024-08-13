import { z } from 'zod';

export const SetOrdersGridRequestSchema = z.object({
  symbol: z.string().min(1, 'Required'),
  side: z.enum(['Buy', 'Sell']),
  quantity: z.string().min(0).regex(/^\d+$/, 'Invalid integer number'),
  deltaPrice: z.number().min(0),
  closePosition: z.boolean().default(false),
  orderQuantity: z.number().int().min(1).max(100),
  startPrice: z.number().optional(),
  quantityMultiplier: z.number().optional(),
});

export type SetOrdersGridRequest = z.infer<typeof SetOrdersGridRequestSchema>;
