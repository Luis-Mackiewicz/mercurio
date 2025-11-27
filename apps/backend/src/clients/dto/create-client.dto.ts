import { z } from 'zod';

export const createClientSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),

  cpfCnpj: z
    .string()
    .min(11, 'O documento deve ter no mínimo 11 dígitos (CPF).')
    .max(14, 'O documento deve ter no máximo 14 dígitos (CNPJ).')
    .regex(/^\d+$/, 'O documento deve conter apenas números.')
    .nonempty('O CPF/CNPJ é obrigatório.'),

  phone: z.string().min(8, 'O telefone é obrigatório.'),

  email: z.string().email('Formato de email inválido.').nullable().optional(),

  street: z.string().min(1, 'A rua é obrigatória.'),
  number: z.string().min(1, 'O número é obrigatório.'),
  district: z.string().min(1, 'O bairro é obrigatório.'),
  city: z.string().min(1, 'A cidade é obrigatória.'),
  state: z.string().length(2, 'O estado deve ter 2 letras (UF).'),
  cep: z.string().min(8, 'O CEP é obrigatório.'),

  reference: z
    .string()
    .min(1, 'A referência não pode ser vazia.')
    .nullable()
    .optional(),

  enterpriseId: z.string().uuid('ID da empresa deve ser um UUID válido.'),
} as const);

export type CreateClientDto = z.infer<typeof createClientSchema>;
