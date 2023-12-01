import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { RequestDataDto } from '@/dto/request-data.dto';
import { AuthService } from './auth.service';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const requestData: RequestDataDto = request.body;

    if (!requestData.token) {
      return false;
    }

    return this.authService.validateToken(requestData.token);
  }
}
