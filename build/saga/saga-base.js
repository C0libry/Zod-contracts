"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagaBaseSchema = void 0;
const zod_1 = require("zod");
exports.SagaBaseSchema = zod_1.z.object({
    eventId: zod_1.z.string().uuid(),
    payload: zod_1.z.unknown(),
    saga: zod_1.z.boolean(),
});
