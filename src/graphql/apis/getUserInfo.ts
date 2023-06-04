import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { GetMeDocument } from '@/graphql/generated';

export const getUserInfo = async () => {
  const queryClient = graphqlClientRequest(true);
  return queryClient.request(GetMeDocument);
};
