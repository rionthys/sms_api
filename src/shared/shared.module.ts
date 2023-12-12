import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostRequestService } from './services/post-request.service';
import { MessageLoggerService } from './services/logger.service';
import { DatabaseModule } from './database/database.module';
import { SidService } from './services/unique-sid.service';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [],
  providers: [PostRequestService, MessageLoggerService, SidService],
  exports: [
    PostRequestService,
    MessageLoggerService,
    SidService,
    DatabaseModule,
  ],
})
export class SharedModule {}
