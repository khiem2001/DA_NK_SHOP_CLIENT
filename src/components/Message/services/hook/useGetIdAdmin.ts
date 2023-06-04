import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useGetIdAdminQuery } from '@/graphql/generated';
import { useMemo } from 'react';

export const useGetIdAdmin = () => {
  const { data, isLoading } = useGetIdAdminQuery(graphqlClientRequest(), {});

  const idAdmin = useMemo(() => {
    return data?.getIdAdmin?.id || '';
  }, [data]);

  return { idAdmin, isLoading };
};
