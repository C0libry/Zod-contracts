import { z } from 'zod';

export const FindUserResponseSchema = z.object({
  id: z.string().uuid('Must be uuid'),
  username: z.string().regex(/^(?!.*\W)(?!.*\s).{3,}$/, {
    message: `Username must be at least 3 characters long, Username cannot contain a special character and spaces`,
  }),
  name: z.string().min(1, 'Required'),
  createdAt: z.date(),
});

export type FindUserResponse = z.infer<typeof FindUserResponseSchema>;
