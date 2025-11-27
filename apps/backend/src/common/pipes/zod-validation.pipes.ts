import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import type { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema) {}

  transform(value: any) {
    const parsed = this.schema.safeParse(value);

    if (!parsed.success) {
      const formatted = parsed.error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      throw new BadRequestException({
        message: 'Erro de validação',
        errors: formatted,
      });
    }

    return parsed.data;
  }
}
