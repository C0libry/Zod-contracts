"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApiKeyRequestSchema = void 0;
const zod_1 = require("zod");
exports.UpdateApiKeyRequestSchema = zod_1.z.object({
    apiKeyName: zod_1.z.string().min(1, 'Required'),
    newApiKeyName: zod_1.z.string().min(1, 'Required').optional(),
    apiKey: zod_1.z.string().min(1, 'Required').optional(),
    apiSecret: zod_1.z.string().min(1, 'Required').optional(),
    isDemoKey: zod_1.z.boolean().optional(),
});
