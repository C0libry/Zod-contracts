"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApiKeyWithUserIdRequestSchema = exports.CreateApiKeyRequestSchema = void 0;
const zod_1 = require("zod");
exports.CreateApiKeyRequestSchema = zod_1.z.object({
    apiKeyName: zod_1.z.string().min(1, 'Required'),
    apiKey: zod_1.z.string().min(1, 'Required'),
    apiSecret: zod_1.z.string().min(1, 'Required'),
});
exports.CreateApiKeyWithUserIdRequestSchema = exports.CreateApiKeyRequestSchema.extend({
    userId: zod_1.z.string().uuid(),
});
