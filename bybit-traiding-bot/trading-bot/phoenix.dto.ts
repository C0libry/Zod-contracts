import { z } from 'zod';

export const CreatePhoenixBotRequestSchema = z.object({
  symbol: z.string().min(1, 'Required'),
  side: z.enum(['Buy', 'Sell']),
  quantity: z.number().min(0),
  slDelta: z.number().min(0).max(100),
  closePosition: z.boolean().default(false),
  startPrice: z.number().min(0).optional(),
  ratio: z.number().min(1).default(2),
});

export type CreatePhoenixBotRequest = z.infer<typeof CreatePhoenixBotRequestSchema>;
