/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3.

Purpose:
getItem.js demonstrates how to use the Amazon DynamoDB document client to get an item in a table.

Inputs (replace in code):
- TABLE_NAME
- primaryKey - The name of the primary key. For example, "title".
- VALUE_1: Value for the primary key. (The format for the datatype must match the schema. For example, if the primaryKey is a number, VALUE_1 has no inverted commas.)
- sortKey - The name of the sort key. Only required if the table has sort key. For example, "year".
- VALUE_2: Value for the primary key. (The format for the datatype must match the schema.)

Running the code:
node getItem.js
*/
// snippet-start:[dynamodb.JavaScript.movies.getItemV3]

import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../libs/ddbDocClient.js";

// Set the parameters.
export const params = {
  TableName: "TABLE_NAME",
  Key: {
    primaryKey: "VALUE_1",
    sortKey: "VALUE_2",
  },
};

export const getItem = async () => {
  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    console.log("Success :", data.Item);
  } catch (err) {
    console.log("Error", err);
  }
};
getItem();

// snippet-end:[dynamodb.JavaScript.movies.getItemV3]
