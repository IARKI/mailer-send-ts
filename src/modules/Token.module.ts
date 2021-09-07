import { RequestService } from "../services/request.service";
import { Token } from "../models";
import { APIResponse } from "./MailerSend.module";

export class TokenModule extends RequestService {
  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);
  }

  async create(token: Token): Promise<APIResponse> {
    return await this.post("/token", token);
  }

  async updateSettings(tokenId: string, updates: TokenUpdates): Promise<APIResponse> {
    return await this.put(`/token/${tokenId}/settings`, updates);
  }

  async delete(tokenId: string): Promise<APIResponse> {
    return await this.deleteReq(`/token/${tokenId}`);
  }
}

export interface TokenUpdates {
  status?: "pause" | "unpause";
}
