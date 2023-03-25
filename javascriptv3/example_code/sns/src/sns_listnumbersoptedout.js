/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide//sns-examples-sending-sms.html.

Purpose:
sns_listnumbersoptedout.js demonstrates how to retrieve a list of phone numbers that have opted out of receiving Amazon SMS messages.

Inputs (replace in code):

Running the code:
node sns_listnumbersoptedout.js
 */
// snippet-start:[sns.JavaScript.SMS.listPhoneNumbersOptedOutV3]

// Import required AWS SDK clients and commands for Node.js
import {ListPhoneNumbersOptedOutCommand } from "@aws-sdk/client-sns";
import {snsClient } from "./libs/snsClient.js";

const run = async () => {
  try {
    const data = await snsClient.send(new ListPhoneNumbersOptedOutCommand({}));
    console.log("Success.",  data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
// snippet-end:[sns.JavaScript.SMS.listPhoneNumbersOptedOutV3]
// For unit tests only.
// module.exports ={run};
