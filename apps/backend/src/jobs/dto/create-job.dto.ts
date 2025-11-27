import { z } from 'zod';

export const createJobSchema = z.object({
  title: z.string().min(3, 'O título do job deve ter pelo menos 3 caracteres.'),
  description: z
    .string()
    .min(5, 'A descrição deve ter pelo menos 5 caracteres.'),

  quantity: z
    .number()
    .int()
    .nonnegative('A quantidade não pode ser negativa.')
    .optional(),
  location: z.string().optional(),
  deadline: z.preprocess(
    (arg) => (arg ? new Date(arg as string) : undefined),
    z.date().optional(),
  ),
  estimatedValue: z
    .number()
    .nonnegative('O valor estimado não pode ser negativo.')
    .optional(),
  finalValue: z
    .number()
    .nonnegative('O valor final não pode ser negativo.')
    .optional(),

  status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']).optional(),

  enterpriseId: z.string().uuid('ID da empresa deve ser um UUID válido.'),
  clientId: z.string().uuid('ID do cliente deve ser um UUID válido.'),
  employeeId: z
    .string()
    .uuid('ID do funcionário deve ser um UUID válido.')
    .optional(),
});

export type CreateJobDto = z.infer<typeof createJobSchema>;
