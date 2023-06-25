import Notification from '@/components/Notification';
import { useClearCartMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useCallback } from 'react';

const useClearCart = () => {
  const { mutate: clearCart, isLoading } = useClearCartMutation(graphqlClientRequest(true), {
    onSuccess: data => {},
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleClearCart = useCallback(() => {
    clearCart({});
  }, [clearCart]);

  return {
    handleClearCart
  };
};
export default useClearCart;
