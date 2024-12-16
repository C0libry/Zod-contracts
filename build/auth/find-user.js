"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserResponseSchema = void 0;
const zod_1 = require("zod");
exports.FindUserResponseSchema = zod_1.z.object({
    id: zod_1.z.string().uuid('Must be uuid'),
    username: zod_1.z.string().regex(/^(?!.*\W)(?!.*\s).{3,}$/, {
        message: `Username must be at least 3 characters long, Username cannot contain a special character and spaces`,
    }),
    name: zod_1.z.string().min(1, 'Required'),
    createdAt: zod_1.z.date(),
});
