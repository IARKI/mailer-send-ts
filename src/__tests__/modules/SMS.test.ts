import { SMSModule } from "../../modules/SMS.module";
import { SMSPersonalization, SMSParams } from "../../models";
import * as nock from "nock";

describe("SMS Module", () => {
  const smsModule = new SMSModule("test_key", "http://test.com");

  it("send", async () => {
    nock("http://test.com").post("/sms").reply(202, { key1: "key1_value" }, { "x-sms-message-id": "test" });
    const personalization: SMSPersonalization[] = [];

    personalization.push(new SMSPersonalization("+19191234567", { name: "Dummy" }));
    personalization.push(new SMSPersonalization("+19199876543", { name: "Not Dummy" }));

    const params = new SMSParams()
      .setFrom("+19191234567")
      .setTo(["+19191234567", "+19199876543"])
      .setText("Hey {{name}}! This is just a friendly hello :D")
      .setPersonalization(personalization);

    const sendEmail = await smsModule.send(params);

    expect(sendEmail.headers).toMatchObject({ "x-sms-message-id": "test", "content-type": "application/json" });
    expect(sendEmail.body).toMatchObject({ key1: "key1_value" });

    expect(sendEmail.statusCode).toBe(202);
  });
});
