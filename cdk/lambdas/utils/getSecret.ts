import {
  GetSecretValueCommand,
  SecretsManagerClient
} from '@aws-sdk/client-secrets-manager';

export const getSecret = async (secretId: string, region: string) => {
  const client = new SecretsManagerClient({ region });

  const command = new GetSecretValueCommand({
    SecretId: secretId
  });

  const result = await client.send(command);
  if (!result.SecretString) {
    throw new Error('Secret not found');
  }
  return result.SecretString;
};
