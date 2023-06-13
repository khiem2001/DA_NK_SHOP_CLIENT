import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 30px 0 150px;
  padding: 0;

  .pagination li {
    display: inline-block;
    margin-right: 5px;
  }

  .pagination li a {
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 0 5px;
    padding: 7px 15px;
    &:hover {
      background-color: #eee;
    }
  }

  .pagination li.active a {
    background-color: #007bff;
    color: #fff;
  }
`;

export const PaginationLimit = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginationLimitText = styled.span`
  margin-right: 10px;
`;

export const PaginationLimitSelect = styled.select`
  margin-right: 20px;
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  cursor: pointer;
`;
