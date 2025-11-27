// create-user.dto.ts
import { z } from 'zod';
import { UserRole } from '../../../generated/prisma/client';

export const createUserSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  role: z.nativeEnum(UserRole).optional(),
  profileImage: z.string().url('Formato de URL inválido').optional(),
  bannerImage: z.string().url('Formato de URL inválido').optional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
