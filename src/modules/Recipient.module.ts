import { RequestService } from "../services/request.service";
import { APIResponse } from "./MailerSend.module";
import { BlockListRecipients, RecipientsQueryParams } from "../models";

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

  async blockList(queryParams?: RecipientsQueryParams) {
    return await this.get(`/suppressions/blocklist`, queryParams);
  }

  async blockRecipients(blockRecipients: BlockListRecipients) {
    return await this.post<BlockListRecipients>(`/suppressions/blocklist`, blockRecipients);
  }

  async delBlockListRecipients(ids: string[]) {
    return await this.deleteReq<{ ids: string[] }>(`/suppressions/blocklist`, { ids });
  }

  async delAllBlockListRecipients() {
    return await this.deleteReq<{ all: boolean }>(`/suppressions/blocklist`, { all: true });
  }
}
