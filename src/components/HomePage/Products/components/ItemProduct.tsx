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
import { formatCurrency } from '@/utils/format-currency';
interface IProps {
  _id?: string;
  name?: string;
  description?: string;
  totalSold?: number;
  price?: number;
  imageUrl?: string;
}
const ItemProduct = (props: IProps) => {
  return (
    <Link href={'/products/' + props._id}>
      <ItemWrapper>
        <ItemImage src={props.imageUrl} alt={props.name} />
        <ItemInfo>
          <ItemTitle>{props.name}</ItemTitle>
          <ItemDescription>{props.description}</ItemDescription>
          <ItemDetail>
            <ItemPrice>{formatCurrency(props.price || 0)}</ItemPrice>
            <ItemSold>{'Đã bán ' + props.totalSold}</ItemSold>
          </ItemDetail>
        </ItemInfo>
      </ItemWrapper>
    </Link>
  );
};

export default ItemProduct;
