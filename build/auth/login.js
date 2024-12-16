"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginResponseSchema = exports.UserLoginRequestSchema = void 0;
const zod_1 = require("zod");
const user_profile_1 = require("./user-profile");
exports.UserLoginRequestSchema = zod_1.z.object({
    emailOrUsername: zod_1.z.string().min(3, {
        message: 'Must be at least 3 characters long',
    }),
    password: zod_1.z.string().min(8, {
        message: `Must be at least 8 characters long`,
    }),
});
exports.UserLoginResponseSchema = zod_1.z.object({
    user: user_profile_1.UserProfileResponseSchema,
    accessToken: zod_1.z.string().min(5),
});
