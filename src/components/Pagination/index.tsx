import React from 'react';
import { useState } from 'react';

import { PaginationLimit, PaginationLimitSelect, PaginationLimitText, PaginationWrapper } from './paginationStyled';
import ReactPaginate from 'react-paginate';
import Notification from '../Notification';
interface Props {
  limit: number;
  currentPage: number;
  totalPage: number;
  onPageChange: (pageNumber: number, newLimit?: number) => void;
}

const Pagination = ({ limit, currentPage, totalPage, onPageChange }: Props) => {
  const [customLimit, setCustomLimit] = useState(limit);
  const [customPage, setCustomPage] = useState(currentPage);

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(e.target.value, 10);
    setCustomLimit(newLimit);
    onPageChange(1, newLimit);
  };

  const handlePageClick = (event: any) => {
    // if (event.selected === 0 || event.selected === totalPage - 1) {
    // }
    onPageChange(event.selected + 1);
  };

  const renderOptions = () => {
    const options = [];
    for (let i = 2; i <= 10; i++) {
      options.push(
        <option key={'page' + i} value={6 * i}>
          {6 * i}
        </option>
      );
    }
    return options;
  };

  return (
    <PaginationWrapper>
      <PaginationLimit>
        <PaginationLimitText>Số lượng:</PaginationLimitText>
        <PaginationLimitSelect value={customLimit} onChange={handleLimitChange}>
          {renderOptions()}
        </PaginationLimitSelect>
      </PaginationLimit>
      <ReactPaginate
        pageCount={totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        previousLabel={'<<'}
        nextLabel={'>>'}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
