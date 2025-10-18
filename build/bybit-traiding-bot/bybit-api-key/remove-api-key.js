"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveApiKeyWithUserIdRequestSchema = exports.RemoveApiKeyRequestSchema = void 0;
const zod_1 = require("zod");
exports.RemoveApiKeyRequestSchema = zod_1.z.object({
    apiKeyName: zod_1.z.string().min(1, 'Required'),
});
exports.RemoveApiKeyWithUserIdRequestSchema = exports.RemoveApiKeyRequestSchema.extend({
    userId: zod_1.z.string().uuid(),
});
