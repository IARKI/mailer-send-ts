import { EmailModule } from "./Email.module";
import { ActivityModule } from "./Activity.module";
import { MessageModule } from "./Message.module";
import { DomainModule } from "./Domain.module";
import { RecipientModule } from "./Recipient.module";
import { TokenModule } from "./Token.module";
import { SMSModule } from "./SMS.module";

export class MailerSend {
  private readonly apiKey: string;
  private baseUrl: string = "https://api.mailersend.com/v1";
  email: EmailModule;
  activity: ActivityModule;
  message: MessageModule;
  domain: DomainModule;
  recipient: RecipientModule;
  sms: SMSModule;
  token: TokenModule;

  constructor(config: MailerSendConfig) {
    this.apiKey = config.apiKey;
    this.activity = new ActivityModule(config.apiKey, this.baseUrl);
    this.email = new EmailModule(config.apiKey, this.baseUrl);
    this.message = new MessageModule(config.apiKey, this.baseUrl);
    this.domain = new DomainModule(config.apiKey, this.baseUrl);
    this.recipient = new RecipientModule(config.apiKey, this.baseUrl);
    this.token = new TokenModule(config.apiKey, this.baseUrl);
    this.sms = new SMSModule(config.apiKey, this.baseUrl);
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
