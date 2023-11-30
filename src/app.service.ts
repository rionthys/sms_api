import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  unauthorized(): string {
    return 'unauthorized HTTP request';
  }
}
