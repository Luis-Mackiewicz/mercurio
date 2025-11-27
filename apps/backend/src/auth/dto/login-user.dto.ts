// login-user.dto.ts
import { z } from 'zod';

export const loginUserSchema = z.object({
  email: z.string().email('Email inválido.').min(1, 'O email é obrigatório.'),

  password: z.string().min(6, 'A senha deve ser fornecida.'),
});

export type LoginUserDto = z.infer<typeof loginUserSchema>;
