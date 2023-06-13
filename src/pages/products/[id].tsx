import { GetListProductDocument, GetProductDocument } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsCartPlus } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import { TfiComment } from 'react-icons/tfi';
import { AiOutlineIdcard } from 'react-icons/ai';
import { IoSend } from 'react-icons/io5';
import {
  ButtonBuy,
  ButtonComment,
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
  ImageCommon,
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
import { formatCurrency } from '@/utils/format-currency';
import Image from 'next/image';
import useUserStore, { UserStore } from '@/store/useUserStore';
import Loading from '@/components/Loading';
import useCreateComment from '@/components/HomePage/Products/services/hooks/useCreateComment';
import useModalStore, { StoreModal } from '@/store/useModalStore';
import Notification from '@/components/Notification';
import useCartStore from '@/store/useCartStore';
import { useRouter } from 'next/router';
import useFavoriteProduct from '@/components/HomePage/Products/services/hooks/useFavoriteProduct';
import { useIsFavoriteProduct } from '@/components/HomePage/Products/services/hooks/useIsFavoriteProduct';
import { MdFavorite } from 'react-icons/md';

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
    fallback: true
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
    revalidate: 1,
    notFound
  };
}

const DetailProduct = ({ data }: Props) => {
  const openModal = useModalStore((state: any) => state.openModal);
  const { user } = useUserStore(store => store) as UserStore;
  const { addItem, setDirectBuy } = useCartStore((store: any) => store);
  const { handleFavoriteProduct, favoriteProductLoading } = useFavoriteProduct();
  const router = useRouter();

  let imageUser;
  if (user?.avatarId?.url) {
    imageUser = 'http://127.0.0.1:7007/' + user.avatarId.url;
  } else {
    imageUser = '/images/account/default-avatar-image.jpg';
  }
  const product = data.getProduct.product;
  const [productId, setProductId] = useState(product._id);
  const { listComment, isLoading } = useListComment({ id: productId });
  const { handleCreateComment } = useCreateComment();

  const [quantity, setQuantity] = useState(1);
  const [showComment, setShowComment] = useState(true);
  const [userComment, setUserComment] = useState('');
  const { isFavoriteProduct } = useIsFavoriteProduct(productId);

  const [like, setLike] = useState(product.totalLike);
  const [comment, setComment] = useState(product.totalComment);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleCommentChange = (event: any) => {
    setUserComment(event.target.value);
  };

  const handleComment = (event: any) => {
    event.preventDefault();
    if (user) {
      handleCreateComment(userComment, productId);
      setUserComment('');
      setComment((prev: number) => prev + 1);
    } else {
      Notification.Info('Bạn chưa đăng nhập tài khoản!');
      openModal(StoreModal.LOGIN);
    }
  };

  const handleBuyProduct = (e: any) => {
    e.preventDefault();
    if (user) {
      setDirectBuy(true);
      addItem({ productId, quantity, status: true, price: product.price });
      router.push('/checkout');
    } else {
      Notification.Info('Đăng nhập tài khoản để mua sản phẩm!');
      openModal(StoreModal.LOGIN);
    }
  };

  return (
    <DetailProductContainer>
      <Imagewrapper>
        <ImageProduct src={'http://127.0.0.1:7007/' + product.image.url} alt={product.name} />
        <DetailOfUsers>
          <button
            onClick={() => {
              handleFavoriteProduct(productId);
              if (!favoriteProductLoading && !isFavoriteProduct) {
                setLike((prev: number) => prev + 1);
              } else if (!favoriteProductLoading && isFavoriteProduct && like > 0) {
                setLike((prev: number) => prev - 1);
              }
            }}
          >
            {isFavoriteProduct ? <MdFavorite /> : <GiSelfLove />}
            {like + '  Đã thích'}
          </button>
          <button onClick={() => setShowComment(!showComment)}>
            <TfiComment />
            {comment + ' Bình luận'}
          </button>
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
          {product?.type && (
            <DetailItem>
              <DetailLabel>Phân loại:</DetailLabel>
              <DetailValue>{product.type}</DetailValue>
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
          <ButtonBuy onClick={handleBuyProduct}>Mua Ngay</ButtonBuy>
        </BuyWrapper>
      </InfoWrapper>
      {showComment && (
        <CommentWrapper>
          <CommentTitle>Bình Luận Của Người Dùng</CommentTitle>
          <form>
            <ImageCommon src={imageUser} alt={product.name} width={500} height={500} />
            <textarea
              id="comment"
              name="comment"
              required
              placeholder="Hãy chia sẻ cảm nhận của bạn về sản phẩm này ..."
              value={userComment}
              onChange={handleCommentChange}
            ></textarea>
            <ButtonComment onClick={handleComment}>
              <IoSend />
            </ButtonComment>
          </form>
          <ListComment>
            {isLoading ? (
              <Loading />
            ) : listComment?.data ? (
              <div>
                {listComment?.data?.map((obj, index) => (
                  <ItemComment key={index}>
                    <ImageCommon
                      src={`http://127.0.0.1:7007/${obj.user?.avatarId?.url}`}
                      alt="Ảnh người dùng"
                      width={500}
                      height={500}
                    />
                    <DetailComment>
                      <div>
                        <span>{obj.user?.fullName}</span>
                        <span>
                          {(() => {
                            const createdAt = new Date(obj.createdAt || '');
                            createdAt.setUTCHours(createdAt.getUTCHours() + 7); // Thêm 7 giờ để chuyển đổi múi giờ
                            const options = { timeZone: 'UTC' };
                            const localDateTime = createdAt.toLocaleString('en-US', options);
                            return localDateTime;
                          })()}
                        </span>
                      </div>
                      <ContentComment>{obj.message}</ContentComment>
                    </DetailComment>
                  </ItemComment>
                ))}
              </div>
            ) : (
              <div className="flex justify-center mt-24 text-2xl"> Chưa có bình luận nào về sản phẩm !</div>
            )}
          </ListComment>
        </CommentWrapper>
      )}
    </DetailProductContainer>
  );
};
export default DetailProduct;
