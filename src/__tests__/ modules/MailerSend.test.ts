import { MailerSend } from "../../modules/MailerSend.module";
import { Message } from "../../modules/Message.module";
import { Activity } from "../../modules/Activity.module";
import { Email } from "../../modules/Email.module";

describe("Mailer Send module", () => {
  it("Constructor", () => {
    const mailerSend = new MailerSend({ apiKey: "your_api_key" });
    expect(mailerSend.activity instanceof Activity).toBe(true);
    expect(mailerSend.email instanceof Email).toBe(true);
    expect(mailerSend.message instanceof Message).toBe(true);
  });
});
