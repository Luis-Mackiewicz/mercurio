import { z } from 'zod';

export const createFinancialSchema = z.object({
  method: z.enum(
    ['PIX', 'CASH', 'CREDIT_CARD', 'DEBIT_CARD'],
    'Método de pagamento inválido.',
  ),
  status: z.enum(['NOT_PAID', 'PARTIALLY_PAID', 'PAID']).optional(),

  dueDate: z.preprocess(
    (arg) => (arg ? new Date(arg as string) : undefined),
    z.date().optional(),
  ),
  paidAt: z.preprocess(
    (arg) => (arg ? new Date(arg as string) : undefined),
    z.date().optional(),
  ),

  receipt: z.string().optional().nullable(),

  jobId: z.string().uuid('ID do job deve ser um UUID válido.'),
});

export type CreateFinancialDto = z.infer<typeof createFinancialSchema>;
