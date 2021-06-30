import * as nock from "nock";
import { EmailModule } from "../../modules/Email.module";
import { EmailParams, Recipient } from "../../models";

describe("Email Module", () => {
  const emailModule = new EmailModule("test_key", "http://test.com");
  it("domain", async () => {
    nock("http://test.com").post("/email").reply(202, { key1: "key1_value" }, { header1: "test" });
    const emailParams = new EmailParams()
      .setFrom({ email: "some@email.com" })
      .setTo([new Recipient("some_recipient@mail.com")])
      .setSubject("Some subject")
      .setText("Some text")
      .setHtml("Some html");
    const sendEmail = await emailModule.send(emailParams);
    expect(sendEmail.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });
    expect(sendEmail.statusCode).toBe(202);
  });
});
