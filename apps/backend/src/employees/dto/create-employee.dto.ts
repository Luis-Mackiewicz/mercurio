import { z } from 'zod';

export const createEmployeeSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  role: z
    .string()
    .min(2, 'O cargo deve ter no mínimo 2 caracteres.')
    .optional()
    .nullable(),
  phone: z
    .string()
    .min(8, 'O telefone deve ter no mínimo 8 dígitos.')
    .optional()
    .nullable(),
  email: z.string().email('Formato de email inválido.').optional().nullable(),
  salary: z
    .number()
    .nonnegative('O salário não pode ser negativo.')
    .optional()
    .nullable(),
  enterpriseId: z.string().uuid('ID da empresa deve ser um UUID válido.'),
} as const);

export type CreateEmployeeDto = z.infer<typeof createEmployeeSchema>;
