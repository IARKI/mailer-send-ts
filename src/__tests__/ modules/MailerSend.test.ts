import { MailerSend } from "../../modules/MailerSend.module";
import { MessageModule } from "../../modules/Message.module";
import { ActivityModule } from "../../modules/Activity.module";
import { EmailModule } from "../../modules/Email.module";
import { DomainModule } from "../../modules/Domain.module";

describe("Mailer Send module", () => {
  it("Constructor", () => {
    const mailerSend = new MailerSend({ apiKey: "your_api_key" });
    expect(mailerSend.activity instanceof ActivityModule).toBe(true);
    expect(mailerSend.email instanceof EmailModule).toBe(true);
    expect(mailerSend.message instanceof MessageModule).toBe(true);
    expect(mailerSend.domain instanceof DomainModule).toBe(true);
  });
});
