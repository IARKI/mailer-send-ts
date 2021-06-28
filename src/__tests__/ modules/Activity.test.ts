import * as nock from "nock";
import { Activity } from "../../modules/Activity.module";

describe("Activity Module", () => {
  const activityModule = new Activity("test_key", "http://test.com");
  it("domain", async () => {
    nock("http://test.com")
      .get("/activity/test_id")
      .query({ limit: 20, page: 2 })
      .reply(200, { key1: "key1_value" }, { header1: "test" });
    const getActivities = await activityModule.domain("test_id", { limit: 20, page: 2 });
    expect(getActivities.headers).toMatchObject({ header1: "test", "content-type": "application/json" });
    expect(getActivities.body).toMatchObject({ key1: "key1_value" });
    expect(getActivities.statusCode).toBe(200);
  });
});
