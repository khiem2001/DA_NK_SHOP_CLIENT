import Notification from '@/components/Notification';
import { RemoveFromCartInput, useRemoveFromCartMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useCallback } from 'react';

const useRemoveFromCart = () => {
  const { mutate: removeFromCart, isLoading } = useRemoveFromCartMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      Notification.Success('Xoá khỏi giỏ hàng thành công!');
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleRemoveFromCart = useCallback(
    (values: RemoveFromCartInput) => {
      removeFromCart({ input: values });
    },
    [removeFromCart]
  );

  return {
    handleRemoveFromCart
  };
};
export default useRemoveFromCart;
