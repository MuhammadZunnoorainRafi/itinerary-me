import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNode from 'aws-cdk-lib/aws-lambda-nodejs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as path from 'path';

type DemoAppDeploymentStackProps = cdk.StackProps & {
  appEnv: string;
  stbApiKeySecretArn: string;
};

export class DemoAppDeploymentStack extends cdk.Stack {
  private imagesBucket: s3.Bucket;
  private getAttractionsDataLambda: lambda.Function;

  constructor(
    scope: Construct,
    id: string,
    props: DemoAppDeploymentStackProps
  ) {
    super(scope, id, props);
    const { appEnv, stbApiKeySecretArn } = props;
    const properCasedAppEnv =
      appEnv[0].toUpperCase() + appEnv.slice(1).toLowerCase();

    this.imagesBucket = new s3.Bucket(
      this,
      `ImagesBucket${properCasedAppEnv}`,
      {
        enforceSSL: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY
      }
    );

    new cdk.CfnOutput(this, `ImagesBucketNameOutput${properCasedAppEnv}`, {
      value: this.imagesBucket.bucketName
    });

    const lambdaLayer = new lambda.LayerVersion(
      this,
      `LambdaLayer${properCasedAppEnv}`,
      {
        code: lambda.Code.fromAsset(
          path.join(__dirname, '..', 'layers', 'application')
        ),
        compatibleRuntimes: [lambda.Runtime.NODEJS_18_X],
        description: 'All-in layer for the application context'
      }
    );

    const getAttractionsDataLambdaRole = new iam.Role(
      this,
      `GetAttractionsDataLambdaRole${properCasedAppEnv}`,
      {
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            'service-role/AWSLambdaBasicExecutionRole'
          )
        ]
      }
    );

    const getAttractionsDataSecretsManagerPolicy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['secretsmanager:GetSecretValue'],
      resources: [stbApiKeySecretArn]
    });

    getAttractionsDataLambdaRole.addToPolicy(
      getAttractionsDataSecretsManagerPolicy
    );

    this.getAttractionsDataLambda = new lambdaNode.NodejsFunction(
      this,
      `GetAttractionsDataLambda${properCasedAppEnv}`,
      {
        entry: path.join(
          __dirname,
          '..',
          'lambdas',
          'getAttractionsDataLambda.ts'
        ),
        runtime: lambda.Runtime.NODEJS_18_X,
        environment: {
          APP_ENV: appEnv
        },
        layers: [lambdaLayer],
        role: getAttractionsDataLambdaRole,
        bundling: {
          minify: true,
          sourceMap: false,
          target: 'es2022',
          externalModules: ['axios', '@aws-sdk/client-secrets-manager']
        }
      }
    );
  }
}
