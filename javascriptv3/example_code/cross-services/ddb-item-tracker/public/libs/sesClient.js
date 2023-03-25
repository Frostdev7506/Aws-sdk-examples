/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/cross-service-example-dataupload.html.

Purpose:
sesClient.js is a helper function that creates the Amazon Simple Email Service (Amazon SES) service clients.

Inputs (replace in code):
- REGION
- IDENTITY_POOL_ID - an Amazon Cognito Identity Pool ID.
*/
// snippet-start:[cross-service.JavaScript.ddb-item-tracker.sesClient]

import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { SESClient } from "@aws-sdk/client-ses";

const REGION = "REGION";
const IDENTITY_POOL_ID = "IDENTITY_POOL_ID"; // An Amazon Cognito Identity Pool ID.

// Create an Amazon Comprehend service client object.
const sesClient = new SESClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

export { sesClient, REGION };
// snippet-end:[cross-service.JavaScript.ddb-item-tracker.sesClient]
