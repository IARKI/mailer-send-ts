import { EmailParams } from "../models";
import { RequestService } from "../services/request.service";
import { MailerSend } from "./MailerSend.module";

export class Email extends RequestService<EmailParams> {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async send(params: EmailParams): Promise<MailerSend.APIResponse> {
    return await this.request("/email", params);
  }
}
