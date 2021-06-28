import { Email } from "./Email.module";
import { Activity } from "./Activity.module";
import { Message } from "./Message.module";

export class MailerSend {
  private readonly apiKey: string;
  private baseUrl: string = "https://api.mailersend.com/v1";
  email: Email;
  activity: Activity;
  message: Message;

  constructor(config: MailerSendConfig) {
    this.apiKey = config.apiKey;
    this.email = new Email(config.apiKey, this.baseUrl);
    this.activity = new Activity(config.apiKey, this.baseUrl);
    this.message = new Message(config.apiKey, this.baseUrl);
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
