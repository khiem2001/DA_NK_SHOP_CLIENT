import { GetListProductDocument, GetProductDocument } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { formatCurrency } from '@/utils/format-currency';
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import { BsCartPlus } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import { TfiComment } from 'react-icons/tfi';
import { AiOutlineIdcard } from 'react-icons/ai';
import { IoSend } from 'react-icons/io5';
import {
  BuyWrapper,
  CommentTitle,
  CommentWrapper,
  ContentComment,
  CountInStockLabel,
  Description,
  DetailComment,
  DetailItem,
  DetailLabel,
  DetailOfUsers,
  DetailProductContainer,
  DetailValue,
  Details,
  ImageProduct,
  Imagewrapper,
  InfoWrapper,
  ItemComment,
  ListComment,
  Price,
  Quantity,
  QuantityLabel,
  Title
} from '@/components/HomePage/Products/productsStyled';
import { useListComment } from '@/components/HomePage/Products/services/hooks/useListComment';

interface Props {
  data?: any;
}

export async function getStaticPaths() {
  const queryClient = graphqlClientRequest();
  let notFound = false;
  const result: any = await queryClient
    .request(GetListProductDocument, {
      input: {
        pagination: {
          limit: 1000,
          page: 1
        }
      }
    })
    .catch(error => {
      console.log('>> Get List Products error: ', error?.message);
      notFound = true;
    });

  const paths = result?.getListProduct?.products?.map((product: any) => {
    return {
      params: { id: product?._id?.toString() }
    };
  });
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const queryClient = graphqlClientRequest();
  let notFound = false;
  const result: any = await queryClient
    .request(GetProductDocument, {
      input: { productId: params?.id }
    })
    .catch(error => {
      console.log('>> Get Event details error: ', error?.message);
      notFound = true;
    });

  return {
    props: {
      data: result
    },
    revalidate: 10,
    notFound
  };
}

const DetailProduct = ({ data }: Props) => {
  const product = data.getProduct.product;

  const { listComment, isLoading } = useListComment({ id: product._id });

  const [quantity, setQuantity] = useState(1);
  const [showComment, setShowComment] = useState(true);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <DetailProductContainer>
      <Imagewrapper>
        <ImageProduct src={'http://localhost:7007/' + product.image.url} alt={product.name} />
        <DetailOfUsers>
          <Link href="">
            <GiSelfLove />
            {product.totalLike + '  Đã thích'}
          </Link>
          <Link href="" onClick={() => setShowComment(!showComment)}>
            <TfiComment />
            {product.totalLike + ' Bình luận'}
          </Link>
          <span>
            <AiOutlineIdcard /> {product.totalSold + ' Đã bán'}
          </span>
        </DetailOfUsers>
      </Imagewrapper>
      <InfoWrapper>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>{formatCurrency(product.price)}</Price>
        <Details>
          {product?.manufacturer && (
            <DetailItem>
              <DetailLabel>Thương hiệu:</DetailLabel>
              <DetailValue>{product.manufacturer}</DetailValue>
            </DetailItem>
          )}
          {product?.modelNumber && (
            <DetailItem>
              <DetailLabel>Model:</DetailLabel>
              <DetailValue>{product.modelNumber}</DetailValue>
            </DetailItem>
          )}
          {product?.dimensions && (
            <DetailItem>
              <DetailLabel>Kích thước:</DetailLabel>
              <DetailValue>{product.dimensions}</DetailValue>
            </DetailItem>
          )}
          {product?.weight && (
            <DetailItem>
              <DetailLabel>Trọng lượng:</DetailLabel>
              <DetailValue>{product.weight}</DetailValue>
            </DetailItem>
          )}
          {product.connectivity && (
            <DetailItem>
              <DetailLabel>Kết nối:</DetailLabel>
              <DetailValue>{product.connectivity}</DetailValue>
            </DetailItem>
          )}
          {product?.powerSource && (
            <DetailItem>
              <DetailLabel>Phương thức cấp điện:</DetailLabel>
              <DetailValue>{product.powerSource}</DetailValue>
            </DetailItem>
          )}
          {product?.compatibility && (
            <DetailItem>
              <DetailLabel>Ứng dụng tương thích:</DetailLabel>
              <DetailValue>{product.compatibility}</DetailValue>
            </DetailItem>
          )}
          {product?.warranty && (
            <DetailItem>
              <DetailLabel>Bảo hành:</DetailLabel>
              <DetailValue>{product.warranty}</DetailValue>
            </DetailItem>
          )}
        </Details>
        <Quantity>
          <QuantityLabel>Số lượng:</QuantityLabel>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
          <CountInStockLabel>{product.countInStock + ' sản phẩm có sẵn'}</CountInStockLabel>
        </Quantity>
        <BuyWrapper>
          <Link href="/djsjd">
            <BsCartPlus /> Thêm Vào Giỏ Hàng
          </Link>
          <Link href="/jdkjs">Mua Ngay</Link>
        </BuyWrapper>
      </InfoWrapper>
      {showComment && (
        <CommentWrapper>
          <CommentTitle>Bình Luận Của Người Dùng</CommentTitle>
          <form>
            <img src={'http://localhost:7007/' + product.image.url} alt={product.name} />
            <textarea
              id="comment"
              name="comment"
              required
              placeholder="Hãy chia sẻ cảm nhận của bạn về sản phẩm này ..."
            ></textarea>
            <a href="">
              <IoSend />
            </a>
          </form>
          <ListComment>
            {listComment?.data?.map(obj => (
              <ItemComment>
                <img src={'http://localhost:7007/' + obj.user?.avatarId?.url} alt="Ảnh người dùng" />
                <DetailComment>
                  <div>
                    <span>{obj.user?.fullName}</span>
                    <span>{new Date(obj.createdAt || '').toLocaleString('en-US', { timeZone: 'UTC' })}</span>
                  </div>
                  <ContentComment>{obj.message}</ContentComment>
                </DetailComment>
              </ItemComment>
            ))}
          </ListComment>
        </CommentWrapper>
      )}
    </DetailProductContainer>
  );
};
export default DetailProduct;
