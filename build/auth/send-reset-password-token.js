"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendResetPasswordTokenRequestSchema = void 0;
const zod_1 = require("zod");
exports.SendResetPasswordTokenRequestSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
});
