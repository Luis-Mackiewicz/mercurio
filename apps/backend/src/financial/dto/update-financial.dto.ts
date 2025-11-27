import { z } from 'zod';
import { createFinancialSchema } from './create-financial.dto';

export const updateFinancialSchema = createFinancialSchema.partial();

export type UpdateFinancialDto = z.infer<typeof updateFinancialSchema>;
