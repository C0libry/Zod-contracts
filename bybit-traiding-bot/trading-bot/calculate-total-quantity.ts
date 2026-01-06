import { z } from 'zod';

export const CalculateTotalQuantityRequestSchema = z.object({
  symbol: z.string().min(1, 'Required'),
  quantity: z.number().min(0),
  orderQuantity: z.number().int().min(1).max(100),
  quantityMultiplier: z.number().min(0.5).max(3),
});

export const CalculateTotalQuantityWithUserIdRequestSchema = z.object({
  userId: z.string().uuid(),
  params: CalculateTotalQuantityRequestSchema,
});

export type CalculateTotalQuantityRequest = z.infer<typeof CalculateTotalQuantityRequestSchema>;

export type CalculateTotalQuantityWithUserIdRequest = z.infer<
  typeof CalculateTotalQuantityWithUserIdRequestSchema
>;
