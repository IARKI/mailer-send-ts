import { RequestService } from "../services/request.service";
import { APIResponse } from "./MailerSend.module";
import { Pagination } from "../models";

export class RecipientModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: RecipientsQueryParams): Promise<APIResponse> {
    return await this.get(`/recipients`, queryParams);
  }

  async single(recipientId: string): Promise<APIResponse> {
    return await this.get(`/recipients/${recipientId}`);
  }

  async delete(recipientId: string): Promise<APIResponse> {
    return await this.deleteReq(`/recipients/${recipientId}`);
  }
}

export interface RecipientsQueryParams extends Pagination {
  domain_id?: string; // tslint:disable-line
}
