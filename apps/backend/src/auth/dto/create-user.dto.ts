// create-user.dto.ts
import { z } from 'zod';
import { UserRole } from '../../../generated/prisma/client';

export const createUserSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),

  email: z.string().email('Email inválido.').min(1, 'Email é obrigatório.'),

  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),

  role: z.nativeEnum(UserRole).default(UserRole.ADMIN).optional(),

  profileImage: z
    .string()
    .url('Formato de URL inválido.')
    .nullable()
    .optional(),
  bannerImage: z.string().url('Formato de URL inválido.').nullable().optional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
