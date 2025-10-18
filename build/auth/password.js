"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordSchema = void 0;
const zod_1 = require("zod");
exports.PasswordSchema = zod_1.z.object({
    password: zod_1.z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/, {
        message: `Password must be at least 8 characters long, must contain one lowercase letter, must contain one uppercase letter, must contain one special character and dont'n must contain space characters`,
    }),
    confirmPassword: zod_1.z.string().min(8, {
        message: 'Password confirm must be at least 8 characters long',
    }),
});
