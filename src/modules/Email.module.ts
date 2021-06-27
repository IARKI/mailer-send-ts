import { EmailParams } from "../models";
import { RequestService } from "../services/request.service";
import { APIResponse } from "./MailerSend.module";

export class Email extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async send(params: EmailParams): Promise<APIResponse> {
    return await this.post("/email", params);
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
  };
}
