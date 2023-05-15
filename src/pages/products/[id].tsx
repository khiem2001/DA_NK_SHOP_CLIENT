// import { useListProduct } from '@/components/HomePage/Products/services/hooks/useListProduct';
// import { useProduct } from '@/components/HomePage/Products/services/hooks/useProduct';
// import React from 'react';

// export const getStaticPaths = async () => {
//   const { listProduct } = useListProduct({
//     pagination: {
//       limit: 1000,
//       page: 1
//     }
//   });

//   const paths = listProduct?.products?.map(product => {
//     return {
//       params: { id: product._id }
//     };
//   });

//   return {
//     paths,
//     fallback: false
//   };
// };

// export const getStaticProps = async ({ params }: any) => {
//   const id = params.id;
//   const { result } = useProduct({
//     productId: id
//   });

//   return {
//     props: {
//       product: result.product
//     }
//   };
// };

// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   countInStock: number;
//   image: Object;
//   manufacturer: string;
//   modelNumber: string;
//   dimensions: string;
//   weight: string;
//   connectivity: string;
//   powerSource: string;
//   compatibility: string;
//   warranty: string;
//   totalLike: number;
//   totalComment: number;
//   type: string;
//   totalSold: number;
// };

// const DetailProduct = (props: { product: Product }) => {
//   console.log(props.product);
//   return <>Xin chào</>;
// };

// export default DetailProduct;
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

const DetailProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 5% 10%;
  background-color: #fff;
`;
const Imagewrapper = styled.span`
  grid-column-end: span 2;
`;
const InfoWrapper = styled.span`
  grid-column-end: span 3;
  padding: 0 30px;
`;

const Image = styled.img`
  width: 85%;
  object-fit: cover;
  height: 500px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 0.2rem;
`;

const Description = styled.p`
  font-size: 1.4rem;
  margin: 2rem 0;
`;

const Price = styled.p`
  font-size: 2rem;
  /* font-weight: bold; */
  color: red;
  background-color: #f1f0f0;
  padding-left: 20px;
  margin-bottom: 30px;
`;

const Details = styled.div``;

const DetailItem = styled.p`
  font-size: 1.3rem;
  margin: 0.5rem 0;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  color: #302f2f;
  margin-right: 0.8rem;
`;

const Quantity = styled.p`
  font-size: 1.3rem;
  margin: 2rem 0;

  button {
    border: 1px solid #ccc;
    padding: 5px 20px;
    color: #918e8e;
  }
  span {
    border: 1px solid #ccc;
    padding: 8px 20px;
    font-weight: bold;
    color: #0d2f8d;
  }
`;

const QuantityLabel = styled.label`
  font-weight: bold;
  color: #302f2f;
  margin-right: 2.8rem;
`;

const CountInStockLabel = styled.label`
  color: #615f5f;
  margin-left: 2.8rem;
`;
const DetailValue = styled.span`
  color: #494949;
`;
const DetailOfUsers = styled.span`
  color: #000000;
  margin: 60px 10px;
  display: flex;
  font-size: 22px;

  a,
  span {
    margin-right: 65px;
    svg {
      display: inline-block;
      margin-right: 8px;
    }
  }
  a:hover {
    color: #ff4b04;
  }
`;

const BuyWrapper = styled.div`
  margin: 4rem 0;
  a:nth-child(1) {
    color: #ff7011;
    padding: 15px 25px;
    border: 1px solid #ff5f03;
    background-color: #ffe8db;
    font-weight: 500;
    svg {
      display: inline-block;
      margin-right: 5px;
      font-size: 27px;
      vertical-align: middle;
    }
    &:hover {
      background-color: #f8efe9;
    }
  }
  a:nth-child(2) {
    color: #ffffff;
    padding: 15px 25px;
    border: 1px solid #ff5f03;
    background-color: #ff5f03;
    font-weight: 500;
    margin-left: 80px;
    &:hover {
      background-color: #fc802e;
    }
  }
`;
const CommentWrapper = styled.div`
  width: 70%;
  border: 1px solid #ccc;
  grid-column-end: span 5;
  height: 700px;
  border-top: none;
  background: linear-gradient(to right, #555555, #ccc);
  -webkit-border-top-right-radius: 130px;
  -webkit-border-bottom-right-radius: 108px;
  -webkit-border-bottom-left-radius: 130px;
  -moz-border-radius-topright: 130px;
  -moz-border-radius-bottomright: 108px;
  -moz-border-radius-bottomleft: 130px;
  border-top-right-radius: 130px;
  border-bottom-right-radius: 108px;
  border-bottom-left-radius: 130px;

  form {
    margin: 20px 40px;
    display: flex;
    background-color: #ccc;
    padding: 5px 20px;
    border-radius: 5px;
    align-items: center;
    width: 75%;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-right: 25px;
    }
    textarea {
      padding: 6px 20px;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 5px;
      &:focus {
        outline: 2px solid #3cebeb;
      }
    }

    a {
      margin-left: 40px;
      color: #065991;
      font-size: 30px;
      &:hover {
        color: #3e94e4;
      }
    }
  }
`;

const CommentTitle = styled.p`
  color: #0a022c;
  text-shadow: 2px 2px 4px #3cebeb;

  font-weight: bold;
  font-size: 25px;
  margin: 20px 40px;
`;
const DetailProduct = () => {
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
  const product = {
    _id: '6460d45ade5cd505a8ad7de1',
    name: 'Nồi scơddddahseh',
    description:
      'Bếp điện từ thông minh giúp bạn nấu ăn một cách tiện lợi và an toàn. Sản phẩm có tính năng kết nối wifi để bạn có thể điều khiển từ xa bằng ứng dụng điện thoại.',
    price: 8000000,
    countInStock: 12,
    image: {
      url: 'storage\\2023\\05\\12\\0872c4b5-41b1-4ba4-96b6-18017c6cf62c.jpg'
    },
    manufacturer: 'Electrolux',
    modelNumber: 'Electrolux-EZB52410AX',
    dimensions: '59cm x 52cm x 5.6cm',
    weight: '10kg',
    connectivity: 'Wifi',
    powerSource: 'Điện',
    compatibility: 'iOS, Android',
    warranty: '24 tháng',
    totalLike: 0,
    totalComment: 0,
    type: 'd',
    totalSold: 0
  };
  return (
    <DetailProductContainer>
      <Imagewrapper>
        <Image src={'http://localhost:7007/' + product.image.url} alt={product.name} />
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
            <Image src={'http://localhost:7007/' + product.image.url} alt={product.name} />
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
        </CommentWrapper>
      )}
    </DetailProductContainer>
  );
};

export default DetailProduct;

// import { graphqlClientRequest } from '@/graphql/services/graphql-client';
// import React from 'react';

// const Show = ({ data }) => {
//   return <div></div>;
// };

// export default Show;

// export async function getStaticPaths() {
//     return {
//       paths: [],
//       fallback: true
//     };
//   }

//   export async function getStaticProps({ params }: any) {
//     const queryClient = graphqlClientRequest();
//     let notFound = false;

//     const result: any = await queryClient
//       .request(GetPublicEventDocument, {
//         slug: params?.slug
//       })
//       .catch(error => {
//         console.log('>> Get Event details error: ', error?.message);
//         notFound = true;
//       });

//     return {
//       props: {
//         data: result?.getPublicEvent
//       },
//       revalidate: 10,
//       notFound
//     };
//   }

//   export const getDetailProduct = (id: string) {
//     return 'show/' + id
//   }

// const router = useRouter()

// router.push(getDetailProduct)
