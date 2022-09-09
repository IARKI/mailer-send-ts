import { createHmac, timingSafeEqual } from "crypto";

export class MailerUtils {
  static verifyWebHook(rawBody: Buffer, signature: string, signinSecret: string): boolean {
    if (!signature) {
      throw new Error("No signature provided");
    }
    if (!rawBody) {
      throw new Error("No raw body provided");
    }
    if (!signinSecret) {
      throw new Error("No secret provided");
    }
    const rawData = rawBody.toString("utf8");
    const hmacSignature = createHmac("sha256", signinSecret).update(rawData, "utf8").digest("hex");
    return timingSafeEqual(Buffer.from(signature), Buffer.from(hmacSignature));
  }
}
