import { useFavoriteProductMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const useFavoriteProduct = () => {
  const queryClient = useQueryClient();

  const { mutate: favoriteProduct, isLoading: favoriteProductLoading } = useFavoriteProductMutation(
    graphqlClientRequest(true),
    {
      onSuccess: data => {
        if (data) {
          queryClient.invalidateQueries(['isFavoriteProduct']);
        }
      },
      onError: error => {
        showErrorMessage(error);
      }
    }
  );
  const handleFavoriteProduct = useCallback(
    (productId: string) => {
      return favoriteProduct({
        input: {
          productId
        }
      });
    },
    [favoriteProduct]
  );

  return { handleFavoriteProduct, favoriteProductLoading };
};
export default useFavoriteProduct;
