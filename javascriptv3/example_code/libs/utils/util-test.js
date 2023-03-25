/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { curry } from "ramda";
import { expect } from "vitest";


/**
 * @deprecated use an assertion library instead.
 */
const testEqual = curry(
  (expected, actual) => async () => expect(await actual).toEqual(expected)
);

/**
 * @deprecated use an assertion library instead. 
 */
const testThrows = (fn) => () => {
  expect(fn).toThrowError();
};

export { testEqual, testThrows };
