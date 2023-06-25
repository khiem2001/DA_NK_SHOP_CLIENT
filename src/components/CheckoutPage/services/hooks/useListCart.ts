import { useMemo } from 'react';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useListCartQuery } from '@/graphql/generated';

export const useListCart = () => {
  const { data, isLoading } = useListCartQuery(graphqlClientRequest(true), {});

  const listCart = useMemo(() => {
    return data?.listCart.cart || [];
  }, [data]);

  return { listCart, isLoading };
};
