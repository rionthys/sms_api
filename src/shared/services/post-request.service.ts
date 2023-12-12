import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IPostSending } from '../interfaces/post-request.interface';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostDataDto } from '@/modules/sms-sender/dto/post-data.dto';
import { CallbackDataDto } from '@/modules/callback/dto/callback-data.dto';

@Injectable()
export class PostRequestService implements IPostSending {
  constructor(private httpService: HttpService) {}

  async sendMessage<T extends PostDataDto | CallbackDataDto>(
    data: T,
    url: string,
  ): Promise<any> {
    const response$ = this.httpService
      .post<T>(url, data)
      .pipe(map((response) => response.data));
    return await lastValueFrom(response$);
  }
}
