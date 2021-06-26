import { Email } from "./Email.module";

export class MailerSend {
  private readonly apiKey: string;
  private baseUrl: string = "https://api.mailersend.com/v1";
  email: Email;

  constructor(config: MailerSend.MailerSendConfig) {
    this.apiKey = config.apiKey;
    this.email = new Email(config.apiKey, this.baseUrl);
  }
}

export namespace MailerSend {
  export interface Variable {
    email: string;
    substitutions: Array<VariableSubstitution>;
  }

  export interface VariableSubstitution {
    var: string;
    value: string;
  }

  export interface Personalization {
    email: string;
    data: {
      [key: string]: string;
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
}
