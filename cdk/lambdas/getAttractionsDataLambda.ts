import { type APIGatewayProxyEvent } from 'aws-lambda';
import { getSecret } from './utils/getSecret';
import { getStbAttractionsData } from './utils/getStbAttractionsData';

export const handler = async (event: APIGatewayProxyEvent) => {
  console.info('Received event:', JSON.stringify(event, null, 2));
  try {
    const apiKey = await getSecret(
      `${process.env.APP_ENV}/StbApiKey`,
      process.env.AWS_REGION as string
    );
    const attractions = await getStbAttractionsData(apiKey);
    return {
      statusCode: 200,
      body: JSON.stringify(attractions)
    };
  } catch (e) {
    console.error('Error:', e);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
};
