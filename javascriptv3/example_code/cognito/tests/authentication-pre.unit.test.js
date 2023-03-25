/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { describe, it, expect } from "vitest";
import { handler } from "../scenarios/lambda-triggers/functions/authentication-pre.mjs";

describe("authentication-pre", () => {
  it("should throw an error if the declared client id matches", () => {
    expect.assertions(1);
    return expect(
      handler({
        callerContext: { clientId: "user-pool-app-client-id-to-be-blocked" },
      })
    ).rejects.toBeTruthy();
  });

  it("should not throw an error if the declared client id does not match", () => {
    expect.assertions(1);
    return expect(
      handler({
        callerContext: { clientId: "any-other-client-id" },
      })
    ).resolves.toBeTruthy();
  });
});
