"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileResponseSchema = void 0;
const zod_1 = require("zod");
const find_user_1 = require("./find-user");
exports.UserProfileResponseSchema = find_user_1.FindUserResponseSchema.extend({
    email: zod_1.z.string().email(),
});
