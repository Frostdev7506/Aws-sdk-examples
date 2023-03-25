/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3.

Purpose:
rekognitionClient.js is a helper function that creates the Amazon Rekognition client using ES6 syntax.

Inputs (replace in code):
- REGION
- IDENTITY_POOL_ID - an Amazon Cognito Identity Pool ID.
*/
// snippet-start:[rekognition.JavaScript.detect-ppe.createclientv3]
import { RekognitionClient } from "@aws-sdk/client-rekognition";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";

// Set the AWS Region.
const REGION = "REGION"; // e.g., 'us-east-2'
const IDENTITY_POOL_ID = "IDENTITY_POOL_ID"; // An Amazon Cognito Identity Pool ID.

// Create an Amazon Rekognition client service object that initializes the Amazon Cognito credentials provider.
const rekognitionClient = new RekognitionClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});
export { rekognitionClient };

// snippet-end:[rekognition.JavaScript.detect-ppe.createclientv3]
