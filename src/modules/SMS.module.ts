import { RequestService } from "../services/request.service";
import { SMSParams } from "../models/SMSParams";

export class SMSModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async send(params: SMSParams) {
    return await this.post("/sms", params);
  }
}
