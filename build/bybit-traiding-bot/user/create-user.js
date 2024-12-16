"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRequestSchema = void 0;
const auth_1 = require("../../auth");
exports.CreateUserRequestSchema = auth_1.FindUserResponseSchema.omit({
    createdAt: true,
});
