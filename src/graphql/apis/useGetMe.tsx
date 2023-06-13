import { useMemo } from 'react';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useGetMeQuery } from '../generated';

export const useGetMe = () => {
  const { data, isLoading } = useGetMeQuery(graphqlClientRequest(true), {});

  const user = useMemo(() => {
    return data?.getMe || {};
  }, [data]);

  return { user, isLoading };
};
