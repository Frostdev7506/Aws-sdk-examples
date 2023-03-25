/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from "vitest";

import { handler } from "../scenarios/lambda-triggers/functions/token-generation-pre-add-suppress-claim.mjs";

describe("token-generation-pre-add-suppress-claim", () => {
  it("should override some claims", async () => {
    const result = await handler({
      request: {},
      response: {},
    });
    expect(result).toEqual({
      request: {},
      response: {
        claimsOverrideDetails: {
          claimsToAddOrOverride: {
            my_first_attribute: "first_value",
            my_second_attribute: "second_value",
          },
          claimsToSuppress: ["email"],
        },
      },
    });
  });
});
