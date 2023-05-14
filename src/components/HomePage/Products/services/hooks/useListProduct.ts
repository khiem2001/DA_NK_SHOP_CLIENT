import { useMemo } from 'react';
import { FilterProductInput, InputMaybe, PaginationBaseInput, useGetlistProductQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';

interface IProduct {
  filter?: InputMaybe<FilterProductInput>;
  pagination: PaginationBaseInput;
}
export const useListPoduct = (props: IProduct) => {
  const { data, isLoading } = useGetlistProductQuery(graphqlClientRequest(), {
    input: { ...props }
  });

  const listProduct = useMemo(() => {
    return data?.getListProduct || {};
  }, [data]);

  return { listProduct, isLoading };
};
