import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PostData } from './dto/post-data.dto';
import { BulkSmsResponse } from './dto/bulk-sms-response.dto';
import { lastValueFrom } from 'rxjs';
import { appConfig } from '@/config/app/config';
import { map } from 'rxjs/operators';
import { IMessageSending } from './interfaces/message-sending.interface';

@Injectable()
export class MessageSendingService implements IMessageSending {
  private readonly bulkSmsUrl = appConfig.bulkUrl;
  constructor(private httpService: HttpService) {}

  async sendMessage(postData: PostData): Promise<BulkSmsResponse> {
    const response$ = this.httpService
      .post<BulkSmsResponse>(this.bulkSmsUrl, postData)
      .pipe(map((response) => response.data));
    return await lastValueFrom(response$);
  }
}
