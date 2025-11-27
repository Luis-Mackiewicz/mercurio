import { z } from 'zod';
import { createEmployeeSchema } from './create-employee.dto';

export const updateEmployeeSchema = createEmployeeSchema.partial();

export type UpdateEmployeeDto = z.infer<typeof updateEmployeeSchema>;
