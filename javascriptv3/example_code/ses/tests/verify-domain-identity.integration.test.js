import { describe, afterAll, it, expect } from "vitest";

import { run, DOMAIN_NAME } from "../src/ses_verifydomainidentity";
import { deleteIdentity, findIdentity } from "../src/libs/sesUtils";

describe("ses_verifydomainidentity", () => {
  afterAll(async () => {
    await deleteIdentity(DOMAIN_NAME);
  });

  it("should successfully create a new domain identity", async () => {
    await run();
    const result = await findIdentity(DOMAIN_NAME);
    expect(result).toBeTruthy();
  });
});
