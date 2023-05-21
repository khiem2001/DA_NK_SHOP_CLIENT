import styled from 'styled-components';

export const Modal = styled.div`
  background: rgb(0 0 0 / 80%);
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`;
export const Container = styled.div`
  width: 58%;
  height: 620px;
  margin: auto auto;
  background-color: #ccc;
  display: flex;
  position: relative;
`;

export const TabList = styled.ul`
  list-style-type: none;
  padding: 0;
  background: linear-gradient(to right, #ff5555, #58c6f8);
  width: 30%;
  padding-top: 120px;
`;

export const TabItem = styled.li<{ active: Boolean }>`
  background-color: #ffffff;
  margin-left: 80px;
  padding: 10px;
  font-size: 18px;
  padding-left: 60px;
  cursor: pointer;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;

  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  background-color: ${({ active }) => (active ? '#e9e9e9' : 'transparent ')};
  color: ${({ active }) => (active ? 'red' : '#fff')};
`;

export const Content = styled.div<{ active: boolean }>`
  border: 1px solid #ccc;
  padding: 20px;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

export const FormContainer = styled.div`
  background-color: #e9e9e9;
  width: 100%;
`;
export const IconExit = styled.a`
  left: 20px;
  font-size: 35px;
  color: #fff;
  margin-top: 20px;
  position: absolute;
  cursor: pointer;
  &:hover {
    color: #045052;
  }
`;
