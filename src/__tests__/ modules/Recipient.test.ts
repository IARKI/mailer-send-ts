import * as nock from "nock";
import { RecipientModule } from "../../modules/Recipient.module";

describe("Recipient Module", () => {
  const recipientModule = new RecipientModule("test_key", "http://test.com");
  it("list", async () => {
    const params = { limit: 20, page: 2, domain_id: "domain_id" };
    nock("http://test.com").get("/recipients").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
    const getRecipients = await recipientModule.list(params);
    expect(getRecipients.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getRecipients.body).toMatchObject({ key1: "key1_value" });
    expect(getRecipients.statusCode).toBe(200);
  });
  it("single", async () => {
    nock("http://test.com").get("/recipients/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const getRecipient = await recipientModule.single("test_id");
    expect(getRecipient.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getRecipient.body).toMatchObject({ key1: "key1_value" });
    expect(getRecipient.statusCode).toBe(200);
  });
  it("delete", async () => {
    nock("http://test.com").delete("/recipients/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const deleteRecipient = await recipientModule.delete("test_id");
    expect(deleteRecipient.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(deleteRecipient.body).toMatchObject({ key1: "key1_value" });
    expect(deleteRecipient.statusCode).toBe(200);
  });
  it("block list", async () => {
    const params = { limit: 20, page: 2, domain_id: "domain_id" };
    nock("http://test.com")
      .get("/suppressions/blocklist")
      .query(params)
      .reply(200, { data: [{ id: "id_here" }] }, { header1: "blocklist-header" });
    const deleteRecipient = await recipientModule.blockList(params);
    expect(deleteRecipient.headers).toMatchObject({ header1: "blocklist-header", "content-type": "application/json" });
    expect(deleteRecipient.body).toMatchObject({ data: [{ id: "id_here" }] });
    expect(deleteRecipient.statusCode).toBe(200);
  });
});
