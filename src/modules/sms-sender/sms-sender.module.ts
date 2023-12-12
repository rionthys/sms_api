import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SmsController } from './sms-sender.controller';
import { DataAggregationService } from './data-aggregation.service';
import { ResponseService } from './response.service';
import { MessageProcessingService } from './message-processing.service';
import { SharedModule } from '@/shared/shared.module';

@Module({
  imports: [HttpModule, SharedModule],
  controllers: [SmsController],
  providers: [
    DataAggregationService,
    ResponseService,
    MessageProcessingService,
  ],
})
export class SmsSenderModule {}
