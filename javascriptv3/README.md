# AWS SDK for JavaScript (v3) code examples

## Overview

The code examples in this topic show you how to use the AWS SDK for JavaScript (v3) with AWS.

The AWS SDK for JavaScript (v3) provides a JavaScript API for AWS infrastructure services. Using the SDK, you can build applications on top of Amazon S3, Amazon EC2, Amazon DynamoDB, and more.

## Types of code examples

- **Single-service actions** - Code examples that show you how to call individual service functions.

- **Single-service scenarios** - Code examples that show you how to accomplish a specific task by calling multiple functions within the same service.

- **Cross-service examples** - Sample applications that work across multiple AWS services.

### Find code examples

Single-service actions and scenarios are organized by AWS service in the `example_code` folder. A README in each folder lists and describes how to run the examples.

Cross-service examples are located in the [_cross-services folder_](./example_code/cross-services). A README in each folder describes how to run the example.

## ⚠️ Important

- Running this code might result in charges to your AWS account.
- Running the tests might result in charges to your AWS account.
- We recommend that you grant your code the least privilege. At most, grant only the minimum permissions required to perform the task. For more information, see [Grant least privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).
- This code is not tested in every AWS Region. For more information, see [AWS Regional Services](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services).

### Prerequisites

- Install the latest stable version of Node.js.
- Set up a shared configuration file with your credentials. For more information, see the [AWS SDK for JavaScript (v3) Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-shared.html).
- Install dependencies by running `npm i`

## Tests

**Note**: Running the tests might result in charges to your AWS account.

You can run tests for a specific service, or for every service in this repository. Choose whether to run unit tests, integration tests, or both.

- To run both unit and integration tests for all services, run the following from this directory:

  `npm test`

- To run only unit tests, set the `TEST_SCOPE` variable to `unit`:

  `TEST_SCOPE=unit npm test`

- To run only integration tests, set the `TEST_SCOPE` variable to `integration`:

  `TEST_SCOPE=integration npm test`

- To run tests for a specific service, follow the instructions in the service's README.

## Docker image (Beta)

This example code will soon be available in a container image
hosted on [Amazon Elastic Container Registry (ECR)](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html). This image will be pre-loaded
with all JavaScript v3 examples with dependencies pre-resolved, allowing you to explore
these examples in an isolated environment.

⚠️ As of January 2023, the [SDK for JavaScript v3 image](https://gallery.ecr.aws/b4v4v1s0/javascriptv3) is available on ECR Public but is still
undergoing active development. Refer to
[this GitHub issue](https://github.com/awsdocs/aws-doc-sdk-examples/issues/4127)
for more information.

### Build the Docker image

1. Install and run Docker on your machine.
2. Navigate to the same directory as this readme.
3. Run `docker build -t <image_name> .` and replace `image_name` with a name for the image.

### Launch the Docker container

1. Run `docker run -it -v ~/.aws/credentials:/root/.aws/credentials <image_name>`. `-it` launches an
   interactive terminal. `-v ~/.aws...` is optional but recommended. It will mount your local credentials
   file to the container.
2. The terminal initiates a bash instance at the root of the container. Run `cd javascriptv3` and then you
   can run tests from here by following the steps in the [Tests](#tests) section. Run examples by navigating
   to a service folder and following the README instructions there.

## Additional resources

- [AWS SDK for JavaScript (v3)](https://github.com/aws/aws-sdk-js-v3)
- [AWS SDK for JavaScript (v3) Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/)
- [AWS SDK for JavaScript (v3) API Reference](http://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)

Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. SPDX-License-Identifier: Apache-2.0
