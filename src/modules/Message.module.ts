import { RequestService } from "../services/request.service";
import { APIResponse } from "./MailerSend.module";
import { Pagination } from "../models";

export class Message extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: MessageQueryParams): Promise<APIResponse> {
    return await this.get(`/messages`, queryParams);
  }

  async single(messageId: string): Promise<APIResponse> {
    return await this.get(`/messages/${messageId}`);
  }
}

export interface MessageQueryParams extends Pagination {} // tslint:disable-line
