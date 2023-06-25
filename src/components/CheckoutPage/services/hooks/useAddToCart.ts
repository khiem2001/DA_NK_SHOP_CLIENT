import Notification from '@/components/Notification';
import { AddToCartInput, useAddToCartMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useCallback } from 'react';

const useAddToCart = () => {
  const { mutate: addToCart, isLoading } = useAddToCartMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      Notification.Success('Thêm vào giỏ hàng thành công!');
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleAddToCart = useCallback(
    (values: AddToCartInput) => {
      addToCart({ input: values });
    },
    [addToCart]
  );

  return {
    handleAddToCart
  };
};
export default useAddToCart;
