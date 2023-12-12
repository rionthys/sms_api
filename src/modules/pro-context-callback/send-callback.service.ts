import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { testConfig } from '@/config/app/test-config';
import { map } from 'rxjs/operators';

@Injectable()
export class SendCallbackService {
  private readonly url = testConfig.url;
  constructor(private httpService: HttpService) {}

  async sendMessage() {
    const postData = {
      NRID: '23030002-4CD3-4E9C-9F0F-118C442CF990',
      DDate: '2023-12-07 12:07:32',
      DType: 'SDR',
      DStatus: 0,
      DMessage: 'Delivered',
    };
    const response$ = this.httpService
      .post(this.url, postData)
      .pipe(map((response) => response.data));
    return response$;
  }
}
