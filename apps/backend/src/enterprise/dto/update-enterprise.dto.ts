import { z } from 'zod';

export const updateEnterpriseSchema = z.object({
  name: z.string().min(1, 'O nome da empresa é obrigatório').optional(),
  cnpj: z.string().optional(),
  email: z.string().email('Email inválido').optional(),
  phone: z.string().optional(),
  logo: z.string().url('URL inválida').optional(),
});

export type UpdateEnterpriseDTO = z.infer<typeof updateEnterpriseSchema>;
