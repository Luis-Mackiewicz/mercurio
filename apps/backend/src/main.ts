// main.ts (Corrigido)

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT ?? 3333;

  await app.listen(port);

  console.log(` Mercurio ERP iniciada e rodando na porta ${port}`);
}

void bootstrap();
