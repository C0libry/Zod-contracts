"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDefaultApiKeyWithUserIdRequestSchema = exports.SetDefaultApiKeyRequestSchema = void 0;
const zod_1 = require("zod");
exports.SetDefaultApiKeyRequestSchema = zod_1.z.object({
    apiKeyId: zod_1.z.string().uuid(),
});
exports.SetDefaultApiKeyWithUserIdRequestSchema = exports.SetDefaultApiKeyRequestSchema.extend({ id: zod_1.z.string().uuid() });
