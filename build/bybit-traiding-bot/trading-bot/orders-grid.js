"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetOrdersGridWithUserIdRequestSchema = exports.SetOrdersGridRequestSchema = void 0;
const zod_1 = require("zod");
exports.SetOrdersGridRequestSchema = zod_1.z.object({
    symbol: zod_1.z.string().min(1, 'Required'),
    side: zod_1.z.enum(['Buy', 'Sell']),
    quantity: zod_1.z.number().min(0),
    deltaPrice: zod_1.z.number().min(0).max(100),
    closePosition: zod_1.z.boolean().default(false),
    orderQuantity: zod_1.z.number().int().min(1).max(100),
    startPrice: zod_1.z.number().min(0).optional(),
    setTakeProfit: zod_1.z.boolean().default(false).optional(),
    quantityMultiplier: zod_1.z.number().min(0.5).max(3).optional(),
});
exports.SetOrdersGridWithUserIdRequestSchema = zod_1.z.object({
    userId: zod_1.z.string().uuid(),
    params: exports.SetOrdersGridRequestSchema,
});
