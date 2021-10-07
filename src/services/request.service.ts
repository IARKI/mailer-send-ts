import got from "got";
import { APIResponse } from "../modules/MailerSend.module";

export class RequestService {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  protected async post<T>(path: string, data: T): Promise<APIResponse> {
    return this.request("POST", path, data);
  }

  protected async get(path: string, queryParams?: any): Promise<APIResponse> {
    return this.request("GET", path, null, queryParams);
  }

  protected async deleteReq(path: string): Promise<APIResponse> {
    return this.request("DELETE", path);
  }

  protected async put(path: string, data: any): Promise<APIResponse> {
    return this.request("PUT", path, data);
  }

  private async request(method: "POST" | "GET" | "DELETE" | "PUT", path: string, data?: any, queryParams?: any) {
    try {
      const requestParams = {
        method,
        headers: { Authorization: `Bearer ${this.apiKey}` },
        responseType: "json" as any,
      } as any;

      if (data) {
        requestParams.json = data;
      }
      if (queryParams) {
        requestParams.searchParams = queryParams;
      }
      const { headers, body, statusCode } = await got(`${this.baseUrl}${path}`, requestParams);
      return { headers, body, statusCode };
    } catch (e: any) {
      if (e?.response) {
        throw { headers: e.response.headers, body: e.response.body, statusCode: e.response.statusCode };
      } else {
        throw e;
      }
    }
  }
}
