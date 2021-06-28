import got from "got";
import { APIResponse } from "../modules/MailerSend.module";

export class RequestService {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  protected async post(path: string, data: any): Promise<APIResponse> {
    try {
      const requestParams = {
        headers: { Authorization: `Bearer ${this.apiKey}` },
        json: data,
        responseType: "json" as any,
      };
      const { headers, body, statusCode } = await got.post(`${this.baseUrl}${path}`, requestParams);
      return { headers, body, statusCode };
    } catch (e) {
      throw e;
    }
  }

  protected async get(path: string, queryParams?: any): Promise<APIResponse> {
    try {
      const requestParams = {
        headers: { Authorization: `Bearer ${this.apiKey}` },
        searchParams: queryParams,
        responseType: "json" as any,
      };
      const { headers, body, statusCode } = await got.get(`${this.baseUrl}${path}`, requestParams);
      return { headers, body, statusCode };
    } catch (e) {
      if (e?.response) {
        throw { headers: e.response.headers, body: e.response.body, statusCode: e.response.statusCode };
      } else {
        throw e;
      }
    }
  }
}
