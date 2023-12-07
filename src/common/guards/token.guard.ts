import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { TokenService } from './token.service';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private tokenService: TokenService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const httpAdapter = context.switchToHttp();
    const request = httpAdapter.getRequest<FastifyRequest>();
    const body = request.body as { token: string };
    return this.tokenService.validateToken(body.token);
  }
}
