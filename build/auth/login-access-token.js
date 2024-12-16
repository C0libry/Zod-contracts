"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAccessTokenResponseSchema = void 0;
const zod_1 = require("zod");
const user_profile_1 = require("./user-profile");
exports.LoginAccessTokenResponseSchema = zod_1.z.object({
    user: user_profile_1.UserProfileResponseSchema,
    accessToken: zod_1.z.string().min(5),
});
