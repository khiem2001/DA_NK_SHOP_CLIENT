import { useIsFavoriteProductQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useMemo } from 'react';

export const useIsFavoriteProduct = (productId: string) => {
  const { data, isLoading } = useIsFavoriteProductQuery(graphqlClientRequest(true), {
    input: {
      productId
    }
  });

  const isFavoriteProduct = useMemo(() => {
    return data?.isFavoriteProduct.success;
  }, [data]);

  return { isFavoriteProduct, isLoading };
};
