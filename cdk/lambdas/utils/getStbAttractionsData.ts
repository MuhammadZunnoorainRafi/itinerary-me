import axios from 'axios';

export const getStbAttractionsData = async (apiKey: string, limit = 50) => {
  const baseURL = `https://api.stb.gov.sg`;

  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Language': 'en',
      'X-Api-Key': apiKey
    },
    baseURL
  });

  const response = await instance.get('/content/common/v2/search', {
    params: {
      dataset: 'attractions',
      limit
    }
  });

  return response.data;
};
