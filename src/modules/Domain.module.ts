import { RequestService } from "../services/request.service";
import { APIResponse } from "./MailerSend.module";
import { Domain, DomainQueryParams, DomainRecipientsQueryParams, DomainSettings } from "../models";

export class DomainModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async create(domain: Domain) {
    return await this.post(`/domains`, domain);
  }

  async list(queryParams?: DomainQueryParams): Promise<APIResponse> {
    return await this.get(`/domains`, queryParams);
  }

  async single(domainId: string): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}`);
  }

  async delete(domainId: string): Promise<APIResponse> {
    return await this.deleteReq(`/domains/${domainId}`);
  }

  async updateSettings(domainId: string, data: DomainSettings): Promise<APIResponse> {
    return await this.put(`/domains/${domainId}/settings`, data);
  }

  async recipients(domainId: string, queryParams?: DomainRecipientsQueryParams): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}/recipients`, queryParams);
  }
}
