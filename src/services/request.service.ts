import got from 'got';
import { APIResponse } from '../modules/MailerSend.module';

export class RequestService<T> {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async request(path: string, data: T): Promise<APIResponse> {
    try {
      const requestParams = { headers: { Authorization: `Bearer ${this.apiKey}` }, json: data };
      const { headers, body, statusCode } = await got.post(`${this.baseUrl}${path}`, requestParams);
      return { headers, body, statusCode };
    } catch (e) {
      throw e;
    }
  }
}
