import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { DatabaseModule } from '@/shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
