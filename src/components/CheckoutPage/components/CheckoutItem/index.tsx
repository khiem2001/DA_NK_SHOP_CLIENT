import useProduct from '@/components/HomePage/Products/services/hooks/useProduct';
import { CheckBox } from '../../styled';
import LoadingCenter from '@/components/Loading';
import React, { useState } from 'react';
import Image from 'next/image';
import { NumberFieldCheckout } from '@/components/Form/NumberField';
import { formatPrice } from '@/utils/string';
import { ImageCommon } from '@/components/HomePage/Products/productsStyled';

const CheckoutItem = (props: any) => {
  const { item, toggleSelectItem, onChangeQuantity } = props;
  const { result, isLoading } = useProduct({ productId: item.productId });
  const handleCheckboxChange = () => {
    toggleSelectItem(item?.productId);
  };
  return (
    <>
      {isLoading ? (
        <LoadingCenter />
      ) : (
        <div className="grid grid-cols-12 divide-x divide-white">
          <div className="col-span-3 flex flex-row gap-2 pt-4">
            <CheckBox>
              <label className="checkboxWrapper">
                <input type="checkbox" checked={item.status} onClick={handleCheckboxChange} />
                <span className="checkmark"></span>
              </label>
            </CheckBox>

            <ImageCommon
              src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${result.product?.image?.url}`}
              alt="Image"
              width={150}
              height={80}
            />
          </div>
          <div className="col-span-4 flex items-center justify-center pt-4">
            <p className="avertaStd-bold ">{result.product?.name}</p>
          </div>
          <div className="col-span-3  flex items-center justify-center pt-4">
            <NumberFieldCheckout
              value={item?.quantity}
              onChange={(value: any) => {
                onChangeQuantity(item?.productId, value);
              }}
            />
          </div>
          <div className="col-span-2  flex items-center justify-center  flex-col pt-4">
            <p className="avertaStd-bold">
              {formatPrice(result.product?.price)}
              <span className="text-xs underline">đ</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default CheckoutItem;
