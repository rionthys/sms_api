import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SmsController } from './sms-sender.controller';
import { DataAggregationService } from './data-aggregation.service';
import { MessageSendingService } from './message-sending.service';
import { MessageLoggerService } from './message-logger.service';
import { DatabaseModule } from '@/shared/database/database.module';
import { ResponseService } from './response.service';
import { MessageProcessingService } from './message-processing.service';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [SmsController],
  providers: [
    DataAggregationService,
    MessageSendingService,
    MessageLoggerService,
    ResponseService,
    MessageProcessingService,
  ],
})
export class SmsSenderModule {}
