// update-user.dto.ts
import { createUserSchema } from './create-user.dto';
import { z } from 'zod';

export const updateUserSchema = createUserSchema.partial().omit({
  password: true,
  email: true,
});

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
