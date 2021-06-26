import { Sender } from "../../models/Sender";

test("Sender", () => {
  const sender = new Sender("sender@mail.com", "Michel");
  expect(sender.email).toBe("sender@mail.com");
  expect(sender.name).toBe("Michel");
});
