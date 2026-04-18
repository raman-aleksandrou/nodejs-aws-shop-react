#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InfraStackWithCF } from '../lib/infra-stack-with-cf';

const app = new cdk.App();
new InfraStackWithCF(app, 'ShopReactStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
