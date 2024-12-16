"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordResponseSchema = exports.ChangePasswordRequestSchema = void 0;
const zod_1 = require("zod");
const password_1 = require("./password");
exports.ChangePasswordRequestSchema = password_1.PasswordSchema.extend({
    oldPassword: zod_1.z.string().min(8, {
        message: 'Old password confirm must be at least 8 characters long',
    }),
})
    .refine((data) => data.password === data.confirmPassword, {
    message: `Passwords not match`,
    path: ['confirmPassword'],
})
    .refine((data) => data.password !== data.oldPassword, {
    message: `Password must be different from the previous`,
    path: ['password'],
});
exports.ChangePasswordResponseSchema = zod_1.z.object({
    accessToken: zod_1.z.string().min(5),
});
