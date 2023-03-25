/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  EC2Client,
  RunInstancesCommand,
  TerminateInstancesCommand,
} from "@aws-sdk/client-ec2";
import { retry } from 'libs/utils/util-timers.js';
import { DEFAULT_REGION } from "libs/utils/util-aws-sdk.js";

const client = new EC2Client({ region: DEFAULT_REGION });
const retryEvery3Seconds = retry({ intervalInMs: 3000, maxRetries: 5 });

export const runEC2Instance = async () => {
  // Free Tier - Amazon Linux 2 AMI (HVM) - Kernel 5.10, SSD Volume Type
  const imageId = "ami-0b5eea76982371e91";
  const command = new RunInstancesCommand({
    MinCount: 1,
    MaxCount: 1,
    ImageId: imageId,
    InstanceType: "t2.micro"
  });
  const { Instances } = await retryEvery3Seconds(() => client.send(command));
  return Instances[0].InstanceId;
};

/**
 *
 * @param {string} instanceId
 */
export const terminateEC2Instance = async (instanceId) => {
  const command = new TerminateInstancesCommand({ InstanceIds: [instanceId] });
  return client.send(command);
};
