import { RequestService } from '../services/request.service';
import { APIResponse } from './MailerSend.module';

export class Activity extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async domain(domainId: string, queryParams: ActivityQueryParams): Promise<APIResponse> {
    return await this.get(`/activity/${domainId}`, queryParams);
  }
}

export interface ActivityQueryParams {
  page?: number;
  limit?: number;
  date_from?: number;
  date_to?: number;
  event?: ActivityEventType[];
}

export enum ActivityEventType {
  PROCESSED = 'processed',
  QUEUED = 'queued',
  SENT = 'sent',
  DELIVERED = 'delivered',
  SOF_BOUNCED = 'soft_bounced',
  HARD_BOUNCED = 'hard_bounced',
  JUNK = 'junk',
  OPENED = 'opened',
  CLICKED = 'clicked',
  UNSUBSCRIBED = 'unsubscribed',
  SPAM_COMPLAINTS = 'spam_complaints',
}
