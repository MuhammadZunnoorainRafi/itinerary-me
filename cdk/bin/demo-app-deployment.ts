#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemoAppDeploymentStack } from '../lib/demo-app-deployment-stack';

const app = new cdk.App();

new DemoAppDeploymentStack(app, 'DemoAppDeploymentDev', {
  env: { account: '381492284651', region: 'ap-southeast-1' },
  appEnv: 'dev',
  stbApiKeySecretArn:
    'arn:aws:secretsmanager:ap-southeast-1:381492284651:secret:dev/StbApiKey-*'
});
