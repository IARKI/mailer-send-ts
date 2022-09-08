import { MailerSend } from "../../modules/MailerSend.module";
import { MessageModule } from "../../modules/Message.module";
import { ActivityModule } from "../../modules/Activity.module";
import { EmailModule } from "../../modules/Email.module";
import { DomainModule } from "../../modules/Domain.module";
import { RecipientModule } from "../../modules/Recipient.module";
import { SMSModule } from "../../modules/SMS.module";
import { TokenModule } from "../../modules/Token.module";

describe("Mailer Send module", () => {
  it("Constructor", () => {
    const mailerSend = new MailerSend({ apiKey: "your_api_key" });
    expect(mailerSend.activity instanceof ActivityModule).toBe(true);
    expect(mailerSend.domain instanceof DomainModule).toBe(true);
    expect(mailerSend.email instanceof EmailModule).toBe(true);
    expect(mailerSend.message instanceof MessageModule).toBe(true);
    expect(mailerSend.recipient instanceof RecipientModule).toBe(true);
    expect(mailerSend.sms instanceof SMSModule).toBe(true);
    expect(mailerSend.token instanceof TokenModule).toBe(true);
  });
});
