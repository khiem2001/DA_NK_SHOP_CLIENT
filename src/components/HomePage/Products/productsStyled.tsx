import styled from 'styled-components';
import colors from '@/styles/colors';
import { pixel2vw } from '../../../../utils/pixel2vw';
import { pixel2fontSize } from '../../../../utils/pixel2fontSize';

export const ProductsWrapper = styled.div`
  width: 100%;
  background-color: ${colors.white_color};
  color: ${colors.dark_color};
  display: flex;
  flex-direction: column;
  padding-top: 200px;
`;

export const ListProduct = styled.div`
  width: 100%;
  padding: ${pixel2vw(30)};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${pixel2vw(30)};
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 0 1rem rgba(255, 105, 180, 0.5);
  }
`;

export const ItemImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${pixel2vw(100)};
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  padding: 1rem;
`;

export const ItemTitle = styled.h2`
  font-size: ${pixel2fontSize(17)};
  font-weight: bold;
  margin-bottom: 0.7rem;
  color: #524d4d;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ItemDescription = styled.p`
  font-size: ${pixel2fontSize(16)};
  margin-bottom: 2.5rem;
  color: #5f5a5a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemPrice = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: red;
`;

export const ItemCountInStock = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ItemTotalLikes = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ProductNotification = styled.p`
  font-size: 25px;
  color: red;
  text-align: center;
  margin-top: 20px;
  font-style: italic;
`;

export const ItemSold = styled.p`
  font-size: 15px;
  color: #838181;
`;

export const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterWrapper = styled.div`
  margin: 100px 15%;
  display: flex;
  flex-direction: column;
`;

export const FilterTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #c0bebe;

  a {
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;

    svg {
      margin-left: 5px;
    }
  }
  a:nth-child(1) {
    border-right: 2px solid #ccc;
  }

  a:nth-child(2) {
    border-left: 2px solid #ccc;
  }
`;

export const FilterDetail = styled.div`
  width: 100%;
`;

export const FilterType = styled.div`
  width: 50%;
  float: left;
  background-color: #ebeeeb;

  form {
    display: flex;
    flex-direction: column;
    margin: 5% 10%;

    label {
      border-bottom: 1px solid #fff;
      padding: 8px;
      input {
        margin-right: 10px;
      }
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background-color: #c1c1c4;
        cursor: pointer;
      }
    }
  }
`;
export const FilterPrice = styled(FilterType)`
  float: right;
`;
