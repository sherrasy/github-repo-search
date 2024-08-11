import { API_URL } from '@utils/constant';
import { GraphQLClient } from 'graphql-request';

export const createAPI = (): GraphQLClient => {
  const token = import.meta.env.VITE_TOKEN;
  const api = new GraphQLClient(API_URL, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  return api;
};
