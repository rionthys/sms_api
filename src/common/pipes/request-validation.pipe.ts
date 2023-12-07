import { ValidationPipe, BadRequestException } from '@nestjs/common';

export class RequestValidation extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => new BadRequestException(errors),
    });
  }
}
