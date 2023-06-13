import React, { useState, useEffect } from 'react';
import Pagination from '@/components/Pagination';
import ItemProduct from '@/components/HomePage/Products/components/ItemProduct';

import { useListProduct } from './services/hooks/useListProduct';
import { ListProduct, ProductNotification, ProductsWrapper } from './productsStyled';
import FilterProducts from '@/components/HomePage/Products/components/FilterProducts';
import { LoadingCenter } from '@/components/Loading';

const Products = () => {
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [price_lte, setPriceLte] = useState(0);
  const [price_gte, setPriceGte] = useState(0);
  const [type_eq, setTypeEq] = useState('');
  const [query, setQuery] = useState('');
  const [input, setInput] = useState({
    query: query,
    filter: {},
    pagination: {
      limit: limit,
      page: page
    }
  });

  const handlePageChange = (pageNumber: number, newLimit?: number) => {
    setPage(pageNumber);
    newLimit && setLimit(newLimit);
  };
  const handleFilterChange = (priceGte?: number, priceLte?: number, typeEq?: string) => {
    setPriceGte(priceGte || 0);
    setPriceLte(priceLte || 0);
    setTypeEq(typeEq || '');
    setLimit(12);
    setPage(1);
  };
  const { listProduct, isLoading } = useListProduct(input);
  useEffect(() => {
    const filter: { type_eq?: string; price_gte?: number; price_lte?: number } = {};
    if (type_eq !== '') {
      filter.type_eq = type_eq;
    } else {
      if (Object.prototype.hasOwnProperty.call(filter, 'type_eq')) {
        delete filter.type_eq;
      }
    }
    if (price_gte !== 0) {
      filter.price_gte = price_gte;
    } else {
      if (Object.prototype.hasOwnProperty.call(filter, 'price_gte')) {
        delete filter.price_gte;
      }
    }
    if (price_lte !== 0) {
      filter.price_lte = price_lte;
    } else {
      if (Object.prototype.hasOwnProperty.call(filter, 'price_lte')) {
        delete filter.price_lte;
      }
    }

    setInput({
      query: query,
      filter: filter,
      pagination: {
        limit: limit,
        page: page
      }
    });
  }, [type_eq, price_gte, price_lte, limit, page, query]);

  return (
    <ProductsWrapper>
      <FilterProducts onFilterChange={handleFilterChange} setQuery={setQuery} />

      <>
        {isLoading ? (
          <LoadingCenter />
        ) : listProduct?.products ? (
          <ListProduct>
            {listProduct?.products?.map(obj => {
              return (
                <ItemProduct
                  key={obj._id}
                  _id={obj._id || ''}
                  name={obj.name || ''}
                  description={obj.description || ''}
                  totalSold={obj.totalSold || 0}
                  price={obj.price || 0}
                  imageUrl={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${obj.image?.url || ''}`}
                />
              );
            })}
          </ListProduct>
        ) : (
          <ProductNotification>Không tìm thấy sản phẩm !</ProductNotification>
        )}
      </>

      <Pagination
        limit={limit}
        currentPage={page}
        totalPage={listProduct?.pagination?.totalPage || 1}
        onPageChange={handlePageChange}
      />
    </ProductsWrapper>
  );
};

export default Products;
