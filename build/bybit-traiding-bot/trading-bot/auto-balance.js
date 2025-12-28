"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAutoBalanceBotWithUserIdRequestSchema = exports.CreateAutoBalanceBotRequestSchema = void 0;
const zod_1 = require("zod");
exports.CreateAutoBalanceBotRequestSchema = zod_1.z.object({
    startBalance: zod_1.z.number().min(0), // example: 100$
    rebalanceTarget: zod_1.z.number().min(0), // example: 3%
    //   outOfPosition
    assets: zod_1.z
        .array(zod_1.z.object({
        symbol: zod_1.z.string().min(1, 'Required'),
        side: zod_1.z.enum(['Buy', 'Sell']),
        targetWeight: zod_1.z.number().min(0), // example: 10%
    }))
        .min(1),
});
exports.CreateAutoBalanceBotWithUserIdRequestSchema = zod_1.z.object({
    userId: zod_1.z.string().uuid(),
    params: exports.CreateAutoBalanceBotRequestSchema,
});
