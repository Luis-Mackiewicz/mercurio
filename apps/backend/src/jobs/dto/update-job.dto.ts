import { z } from 'zod';
import { createJobSchema } from './create-job.dto';

export const updateJobSchema = createJobSchema.partial();

export type UpdateJobDto = z.infer<typeof updateJobSchema>;
