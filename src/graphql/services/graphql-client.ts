import { LOCAL_STORAGE_TOKEN_KEY } from '@/constants';
import { isBrowser } from '@/utils/browser';
import { GraphQLClient } from 'graphql-request';

const endPoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '';
export const graphqlClientRequest = (auth = false) => {
  const headers: any = {};
  if (auth && isBrowser) {
    let accessToken;
    if (isBrowser) {
      accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || '';
    }
    headers.authorization = `Bearer ${accessToken}`;
  }
  return new GraphQLClient(endPoint, {
    headers
  });
};
