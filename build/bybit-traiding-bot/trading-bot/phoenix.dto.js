"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePhoenixBotRequestSchema = void 0;
const zod_1 = require("zod");
exports.CreatePhoenixBotRequestSchema = zod_1.z.object({
    symbol: zod_1.z.string().min(1, 'Required'),
    side: zod_1.z.enum(['Buy', 'Sell']),
    quantity: zod_1.z.number().min(0),
    slDelta: zod_1.z.number().min(0).max(100),
    closePosition: zod_1.z.boolean().default(false),
    startPrice: zod_1.z.number().min(0).optional(),
    ratio: zod_1.z.number().min(1).default(2),
    //   quantityMultiplier: z.number().min(0.5).max(3).optional(),
});
