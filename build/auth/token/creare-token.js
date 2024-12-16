"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreareTokenRequestSchema = void 0;
const zod_1 = require("zod");
exports.CreareTokenRequestSchema = zod_1.z.object({
    userId: zod_1.z.string().uuid('Must be uuid'),
    token: zod_1.z.string(),
    isActive: zod_1.z.boolean(),
});
