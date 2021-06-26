import { EmailParams } from "../../models/EmailParams";

test("EmailParams", () => {
  const params = new EmailParams({
    from: [{ email: "from@email.com", name: "FromSender" }],
    to: [{ email: "to@email.com", name: "ToRecipient" }],
    cc: [{ email: "cc@email.com", name: "CCRecipient" }],
    bcc: [{ email: "bcc@email.com", name: "BCCRecipient" }],
    replyTo: { email: "reply@email.com", name: "ReplyRecipient" },
    subject: "Some subject",
    text: "Some text",
    html: "<b>Some html</b>",
    attachments: [{ content: "base64", fileName: "name", id: "some_id" }],
    templateId: "some_template_id",
    tags: ["tag1", "tag2"],
    variables: [{ email: "to@email.com", substitutions: [{ var: "var_1", value: "value_1" }] }],
    personalization: [{ email: "cc@email.com", data: { key1: "value_1" } }]
  });
  expect(params?.from?.email).toBe("from@email.com");
  expect(params?.from?.name).toBe("FromSender");
  expect(Array.isArray(params.to)).toBe(true);
  expect(params?.to.length).toBe(1);
  expect(Array.isArray(params?.cc)).toBe(true);
  expect(params?.cc?.length).toBe(1);
  expect(Array.isArray(params?.bcc)).toBe(true);
  expect(params?.bcc?.length).toBe(1);
  expect(params?.replyTo?.email).toBe("reply@email.com");
  expect(params?.replyTo?.name).toBe("ReplyRecipient");
  expect(params?.subject).toBe("Some subject");
  expect(params?.html).toBe("Some html");
  expect(Array.isArray(params?.attachments)).toBe(true);
  expect(params?.attachments?.length).toBe(1);
  expect(params?.html).toBe("some_template_id");
  expect(Array.isArray(params?.tags)).toBe(true);
  expect(params?.tags?.length).toBe(2);
  expect(Array.isArray(params?.variables)).toBe(true);
  expect(params?.variables?.length).toBe(1);
  expect(Array.isArray(params?.personalization)).toBe(true);
  expect(params?.personalization?.length).toBe(1);
});
