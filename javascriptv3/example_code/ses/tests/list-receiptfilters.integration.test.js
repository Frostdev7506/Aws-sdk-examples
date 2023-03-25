import { describe, beforeAll, afterAll, it, expect } from "vitest";

import { getUniqueName } from "../../libs/utils/util-string.js";
import { run } from "../src/ses_listreceiptfilters";
import { createReceiptFilter, deleteReceiptFilter } from "../src/libs/sesUtils";

describe("ses_listreceiptfilters", () => {
  const RECEIPT_FILTER_NAME = getUniqueName("ReceiptFilterName");

  beforeAll(async () => {
    await createReceiptFilter(RECEIPT_FILTER_NAME);
  });

  afterAll(async () => {
    await deleteReceiptFilter(RECEIPT_FILTER_NAME);
  });

  it("should list existing receipt filters", async () => {
    const result = await run();
    const filterMatch = result.Filters.find(
      (f) => f.Name === RECEIPT_FILTER_NAME
    );
    expect(filterMatch).toBeTruthy();
  });
});
