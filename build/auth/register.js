"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterResponseSchema = exports.UserRegisterRequestSchema = void 0;
const zod_1 = require("zod");
const login_1 = require("./login");
const password_1 = require("./password");
exports.UserRegisterRequestSchema = password_1.PasswordSchema.extend({
    email: zod_1.z.string().email(),
    username: zod_1.z.string().regex(/^(?!.*\W)(?!.*\s).{3,}$/, {
        message: `Username must be at least 3 characters long, Username cannot contain a special character and spaces`,
    }),
    name: zod_1.z.string().min(1, 'required'),
}).refine((data) => data.password === data.confirmPassword, {
    message: `Passwords not match`,
    path: ['confirmPassword'],
});
exports.UserRegisterResponseSchema = login_1.UserLoginResponseSchema.extend({});
