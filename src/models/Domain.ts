import { Pagination } from "./Pagination";

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
