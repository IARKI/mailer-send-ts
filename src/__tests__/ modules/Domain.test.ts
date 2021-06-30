import * as nock from "nock";
import { Domain } from "../../modules/Domain.module";

describe("Message Module", () => {
  const domainModule = new Domain("test_key", "http://test.com");
  it("list", async () => {
    const params = { limit: 20, page: 2, verified: true };
    nock("http://test.com").get("/domains").query(params).reply(200, { key1: "key1_value" }, { header1: "test" });
    const getDomains = await domainModule.list(params);
    expect(getDomains.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getDomains.body).toMatchObject({ key1: "key1_value" });
    expect(getDomains.statusCode).toBe(200);
  });
  it("recipients", async () => {
    const params = { limit: 20, page: 2 };
    nock("http://test.com")
      .get("/domains/test_id/recipients")
      .query(params)
      .reply(200, { key1: "key1_value" }, { header1: "test" });
    const getDomains = await domainModule.recipients("test_id", params);
    expect(getDomains.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getDomains.body).toMatchObject({ key1: "key1_value" });
    expect(getDomains.statusCode).toBe(200);
  });
  it("single", async () => {
    nock("http://test.com").get("/domains/test_id").reply(200, { key1: "key1_value" }, { header1: "test" });
    const getDomain = await domainModule.single("test_id");
    expect(getDomain.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getDomain.body).toMatchObject({ key1: "key1_value" });
    expect(getDomain.statusCode).toBe(200);
  });
});
