import React, { useState } from 'react';
import {
  ItemCountInStock,
  ItemDescription,
  ItemDetail,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemSold,
  ItemTitle,
  ItemTotalLikes,
  ItemWrapper
} from '../productsStyled';
import Link from 'next/link';
interface IProps {
  _id?: string;
  name?: string;
  description?: string;
  countInStock?: number;
  total_like?: number;
  price?: number;
  imageUrl?: string;
}
const Product = (props: IProps) => {
  function formatCurrency(amount: number) {
    // Sử dụng phương thức toLocaleString để định dạng số về dạng tiền tệ VNĐ
    return amount.toLocaleString('vi', { style: 'currency', currency: 'VND' });
  }

  return (
    <Link href={'/products/' + props._id}>
      <ItemWrapper>
        <ItemImage src={props.imageUrl} alt={props.name} />
        <ItemInfo>
          <ItemTitle>{props.name}</ItemTitle>
          <ItemDescription>{props.description}</ItemDescription>
          <ItemDetail>
            <ItemPrice>{formatCurrency(props.price || 0)}</ItemPrice>
            <ItemSold>Đã bán 10</ItemSold>
          </ItemDetail>
        </ItemInfo>
      </ItemWrapper>
    </Link>
  );
};

export default Product;
