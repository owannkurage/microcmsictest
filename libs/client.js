import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: '1490qd8lda',
    apiKey: process.env.API_KEY,
  });