import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProContextController } from './pro-context.controller';

@Module({
  imports: [HttpModule],
  controllers: [ProContextController],
  providers: [],
})
export class ProContextModule {}
