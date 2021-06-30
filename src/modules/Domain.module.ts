import { RequestService } from "../services/request.service";
import { APIResponse } from "./MailerSend.module";
import { Pagination } from "../models";

export class Domain extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async list(queryParams?: DomainQueryParams): Promise<APIResponse> {
    return await this.get(`/domains`, queryParams);
  }

  async single(domainId: string): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}`);
  }

  async recipients(domainId: string, queryParams?: DomainRecipientsQueryParams): Promise<APIResponse> {
    return await this.get(`/domains/${domainId}/recipients`, queryParams);
  }
}

export interface DomainQueryParams extends Pagination {
  verified?: boolean;
}

export interface DomainRecipientsQueryParams extends Pagination {} // tslint:disable-line
