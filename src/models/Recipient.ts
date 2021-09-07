import { Sender } from "./Sender";
import { Pagination } from "./Pagination";

export class Recipient extends Sender {
  constructor(email: string, name?: string) {
    super(email, name);
  }
}
export interface RecipientsQueryParams extends Pagination {
  domain_id?: string; // tslint:disable-line
}
