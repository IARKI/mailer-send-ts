import { Email } from './Email.module';
import { Activity } from './Activity.module';

export class MailerSend {
  private readonly apiKey: string;
  private baseUrl: string = 'https://api.mailersend.com/v1';
  email: Email;
  activity: Activity;

  constructor(config: MailerSendConfig) {
    this.apiKey = config.apiKey;
    this.email = new Email(config.apiKey, this.baseUrl);
    this.activity = new Activity(config.apiKey, this.baseUrl);
  }
}

export interface APIResponse {
  headers: any;
  body: any;
  statusCode: number;
}

export interface MailerSendConfig {
  apiKey: string;
}
