import { PaymentMethod, PaymentProvider, PaymentType, useCreatePaymentMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { showErrorMessage } from '@/utils/error';
import { randomText } from '@/utils/string';
import useCartStore, { CartStore } from '@/store/useCartStore';
import Notification from '@/components/Notification';
import { useListCart } from './useListCart';

const useCheckout = () => {
  const { listCart } = useListCart();
  const { items, isDirectBuy } = useCartStore(store => store) as CartStore;
  const clearCart = useCartStore((store: any) => store.clear);
  const [listItem, setListItem] = useState<any>([]);

  const { mutate: createPaymentMutate, isLoading: isCreatingPayment } = useCreatePaymentMutation(
    graphqlClientRequest(true),
    {
      onSuccess: data => {
        const paymentUrl = data?.createPayment?.redirectUrl;
        const success = data?.createPayment?.success;
        clearCart();
        if (success) {
          Notification.Success('Bạn đã đặt hàng thành công !');
          window.location.href = '/';
        } else {
          window.location.href = paymentUrl || '/';
        }
      },
      onError: err => {
        showErrorMessage(err);
      }
    }
  );

  useEffect(() => {
    if (isDirectBuy) {
      setListItem([...items]);
    } else {
      setListItem(listCart);
    }
  }, [isDirectBuy, items, listCart]);

  const changeQuantity = useCallback(
    (itemId: string, quantity: number) => {
      setListItem((prev: any) => {
        return prev.map((item: any) => {
          if (item.productId === itemId) {
            return { ...item, quantity };
          }
          return item;
        });
      });
    },
    [setListItem]
  );

  const toggleSelectItem = useCallback(
    (itemId: string) => {
      setListItem((prev: any) => {
        return prev.map((item: any) => {
          if (item.productId === itemId) {
            return { ...item, status: !item.status };
          }
          return item;
        });
      });
    },
    [setListItem]
  );

  const selectedItems = useMemo(() => {
    return Object.values(listItem)?.filter((item: any) => item?.status);
  }, [listItem]);

  const handleCheckout = useCallback(
    (
      paymentMethod: PaymentMethod,
      shippingAddress: string,
      paymentProvider: PaymentProvider,
      paymentType: PaymentType
    ) => {
      createPaymentMutate({
        input: {
          code: randomText(7),
          items: selectedItems?.map((item: any) => ({
            id: item?.productId,
            quantity: item?.quantity || 1
          })),
          paymentMethod,
          shippingAddress,
          paymentProvider,
          paymentType
        }
      });
    },
    [selectedItems]
  );

  return {
    changeQuantity,
    isCreatingPayment,
    toggleSelectItem,
    handleCheckout,
    selectedItems,
    listItem
  };
};

export default useCheckout;
