import colors from '@/styles/colors';
import styled from 'styled-components';
import { pixel2vw } from '../../../utils/pixel2vw';
import { pixel2fontSize } from '../../../utils/pixel2fontSize';

export const NavigatorHolder = styled.div`
  width: 100%;
  background-color: ${colors.dark_color};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  z-index: 100;
  position: fixed;
  z-index: 999;
`;
export const Logo = styled.div`
  display: inline-block;
  margin-left: ${pixel2vw(50)};
  margin-top: ${pixel2vw(5)};

  img {
    width: ${pixel2vw(91)};
    height: ${pixel2vw(30)};
    object-fit: contain;
  }

  @media only screen and (max-width: 600px) {
    margin-left: ${pixel2vw(30)};
  }
  @media only screen and (max-width: 420px) {
    margin-left: ${pixel2vw(10)};
  }
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  margin-right: ${pixel2vw(30)};

  a,
  button {
    font-size: ${pixel2fontSize(9)};
    text-transform: uppercase;
  }

  //
  // @media only screen and (min-width: 1280px) {
  //   a,
  //   button {
  //     font-size: ${pixel2fontSize(11)};
  //     text-transform: uppercase;
  //   }
  // }
  @media only screen and (max-width: 600px) {
    margin-right: ${pixel2vw(30)};
  }

  @media only screen and (max-width: 420px) {
    margin-right: ${pixel2vw(10)};
  }
`;
export const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  & > * {
    border-bottom: 1px solid rgba(212, 219, 245, 0.5);
  }

  @media (min-width: 1400px) {
    margin-left: 50px;
  }

  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    background: #05010e4d;
    padding: 0;

    & > div {
      justify-content: space-between;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      scroll-behavior: smooth;
      border-bottom: 0;
      padding-right: 5px;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  & > div {
    align-items: center;
    justify-content: space-evenly;

    &:last-child {
      border-bottom: 0;
    }
  }
`;
export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: white;
  font-size: ${pixel2vw(38)};
  @media only screen and (max-width: 600px) {
    & > div {
      margin: 0;
    }
  }
  @media only screen and (max-width: 420px) {
    & > div {
      margin: 5px;
      height: 28px;

      & > a {
        margin: 0 5px;
      }
    }
  }
  @media only screen and (max-width: 370px) {
    padding-left: 20px;
  }
`;

export const Item = styled.div<{ isSelected: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .nav-item {
    color: ${({ isSelected }) => (isSelected ? 'red' : 'white')};
    text-decoration: none;
  }

  margin: 0 ${pixel2vw(10)};

  &:active,
  &:hover {
    color: #6786ff;
  }

  a {
    color: ${colors.white_color};
    z-index: 10;
    font-size: ${pixel2vw(13)};
    border: 1px solid #000000;
  }

  a:hover {
    color: #fa6f4c;
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    display: contents;
    & > a {
      padding: 8px 0;
    }
  }
`;
