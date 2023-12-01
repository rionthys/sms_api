import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';

async function api() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8888);
}

api();
