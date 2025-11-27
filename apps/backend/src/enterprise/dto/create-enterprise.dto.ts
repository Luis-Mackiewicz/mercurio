import { z } from 'zod';

export const createEnterpriseSchema = z.object({
  name: z.string().min(1, 'O nome da empresa é obrigatório'),
  cnpj: z.string().optional(),
  email: z.string().email('Email inválido').optional(),
  phone: z.string().optional(),
  logo: z.string().url('URL inválida').optional(),
  ownerId: z.string().uuid('ID do dono inválido'),
});

export type CreateEnterpriseDTO = z.infer<typeof createEnterpriseSchema>;
