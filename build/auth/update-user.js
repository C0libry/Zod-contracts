"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserResponseSchema = exports.UpdateUserRequestSchema = void 0;
const zod_1 = require("zod");
const user_profile_1 = require("./user-profile");
exports.UpdateUserRequestSchema = zod_1.z.object({
    email: zod_1.z.string().email().optional(),
    username: zod_1.z
        .string()
        .regex(/^(?!.*\W)(?!.*\s).{3,}$/, `Username must be at least 3 characters long, Username cannot contain a special character and spaces`)
        .optional(),
    name: zod_1.z.string().min(1, 'Required').optional(),
});
exports.UpdateUserResponseSchema = user_profile_1.UserProfileResponseSchema.extend({});
