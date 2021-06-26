import { Email } from "./Email.module";

export class MailerSend {
  private readonly apiKey: string;
  private baseUrl: string = "https://api.mailersend.com/v1";
  email: Email;

  constructor(config: MailerSendConfig) {
    this.apiKey = config.apiKey;
    this.email = new Email(config.apiKey, this.baseUrl);
  }
}


export interface Variable {
  email: string;
  substitutions: VariableSubstitution[];
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
