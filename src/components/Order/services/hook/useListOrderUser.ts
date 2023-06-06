import { useListOrderUserQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useMemo } from 'react';

export const useListOrderUser = () => {
  const { data, isLoading } = useListOrderUserQuery(graphqlClientRequest(true), {});

  const listOrder = useMemo(() => {
    return data?.listOrderUser.orders || [];
  }, [data]);

  return { listOrder, isLoading };
};
