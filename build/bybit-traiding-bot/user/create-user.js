"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRequestSchema = void 0;
const auth_1 = require("../../auth");
const saga_base_1 = require("../../saga/saga-base");
exports.CreateUserRequestSchema = saga_base_1.SagaBaseSchema.extend({
    payload: auth_1.FindUserResponseSchema.omit({
        createdAt: true,
    }),
});
