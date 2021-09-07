import { RequestService } from "../services/request.service";
import { APIResponse } from "./MailerSend.module";
import { ActivityQueryParams } from "../models";

export class ActivityModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async domain(domainId: string, queryParams?: ActivityQueryParams): Promise<APIResponse> {
    return await this.get(`/activity/${domainId}`, queryParams);
  }
}
