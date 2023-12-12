import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from '@/shared/database/database.module';
import { CallbackService } from './callback.service';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [],
  providers: [CallbackService],
})
export class CallbackModule {}
