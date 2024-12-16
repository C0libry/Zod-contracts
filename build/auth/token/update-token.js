"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTokenRequestSchema = void 0;
const zod_1 = require("zod");
exports.UpdateTokenRequestSchema = zod_1.z.object({
    token: zod_1.z.string(),
    isActive: zod_1.z.boolean(),
});
