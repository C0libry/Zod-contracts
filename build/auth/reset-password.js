"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordRequestSchema = void 0;
const zod_1 = require("zod");
const password_1 = require("./password");
exports.ResetPasswordRequestSchema = password_1.PasswordSchema.extend({
    resetPasswordToken: zod_1.z.string().regex(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/, {
        message: 'Invalid token',
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: `Passwords not match`,
    path: ['confirmPassword'],
});
