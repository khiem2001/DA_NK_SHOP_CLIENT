import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FilterDetail, FilterTitle, FilterWrapper, FilterType, FilterPrice } from '../productsStyled';
import { useListType } from '../services/hooks/useListType';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Formik, Form, Field } from 'formik';

interface IProps {
  onFilterChange: (priceGte?: number, priceLte?: number, typeEq?: string) => void;
}

const FilterProducts = ({ onFilterChange }: IProps) => {
  const { listType, isLoading } = useListType();
  const [showFormType, setShowFormType] = useState(false);
  const [showFormPrice, setShowFormPrice] = useState(false);
  const priceOptions = [
    { label: 'Dưới 500.000đ', value: '0-500000' },
    { label: 'Từ 500.000đ - 1.000.000đ', value: '500000-1000000' },
    { label: 'Trên 1.000.000đ', value: '1000000-0' }
  ];
  const [price_lte, setPriceLte] = useState(0);
  const [price_gte, setPriceGte] = useState(0);
  const [type_eq, setTypeEq] = useState('');

  useEffect(() => {
    onFilterChange(+price_gte, +price_lte, type_eq);
  }, [type_eq, price_gte, price_lte]);
  return (
    <FilterWrapper>
      <FilterTitle>
        <Link
          href={''}
          onClick={() => {
            setTypeEq('');
            setShowFormType(!showFormType);
          }}
        >
          Phân loại
          {showFormType ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Link>
        <Link
          href={''}
          onClick={() => {
            setPriceGte(0);
            setPriceLte(0);
            setShowFormPrice(!showFormPrice);
          }}
        >
          Giá
          {showFormPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Link>
      </FilterTitle>

      <FilterDetail>
        {showFormType && (
          <FilterType>
            <Formik
              initialValues={{ name: '' }}
              onSubmit={values => {
                setTypeEq(values?.name);
              }}
            >
              {({ values, setFieldValue, submitForm }) => (
                <Form>
                  {listType.map(obj => (
                    <label key={obj._id}>
                      <Field
                        type="radio"
                        name="name"
                        value={obj.name}
                        checked={values.name === obj.name}
                        onChange={() => {
                          setFieldValue('name', obj.name);
                          submitForm();
                        }}
                      ></Field>
                      {obj.name}
                    </label>
                  ))}
                </Form>
              )}
            </Formik>
          </FilterType>
        )}

        {showFormPrice && (
          <FilterPrice>
            <Formik
              initialValues={{ price_gte: 0, price_lte: 0 }}
              onSubmit={values => {
                setPriceGte(values.price_gte);
                setPriceLte(values.price_lte);
              }}
            >
              {({ values, setFieldValue, submitForm }) => (
                <Form>
                  {priceOptions.map(obj => (
                    <label key={obj.value}>
                      <Field
                        type="radio"
                        name="price"
                        value={obj.value}
                        checked={`${values.price_gte}-${values.price_lte}` === obj.value}
                        onChange={() => {
                          const [gte, lte] = obj.value.split('-');
                          setFieldValue('price_gte', gte);
                          setFieldValue('price_lte', lte);
                          submitForm();
                        }}
                      />
                      {obj.label}
                    </label>
                  ))}
                </Form>
              )}
            </Formik>
          </FilterPrice>
        )}
      </FilterDetail>
    </FilterWrapper>
  );
};

export default FilterProducts;
