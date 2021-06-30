import { RequestService } from "../services/request.service";
import { APIResponse } from "./MailerSend.module";
import { Pagination } from "../models";

export class DomainModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
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

export interface DomainQueryParams extends Pagination {
  verified?: boolean;
}

export interface DomainRecipientsQueryParams extends Pagination {} // tslint:disable-line

// tslint:disable
export interface DomainSettings {
  send_paused?: boolean;
  track_clicks?: boolean;
  track_opens?: boolean;
  track_unsubscribe?: boolean;
  track_unsubscribe_html?: string;
  track_unsubscribe_plain?: string;
  track_content?: boolean;
  custom_tracking_enabled?: boolean;
  custom_tracking_subdomain?: string;
}

// tslint:enable
