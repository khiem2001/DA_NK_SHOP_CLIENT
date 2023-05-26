import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useField, useFormikContext } from 'formik';

const NumberFieldWrapper = styled.div`
  /* Chrome, Safari, Edge, Opera */

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  input[type='number'] {
    -moz-appearance: textfield;
    height: 45px;
    border: 1px solid #898989;
  }

  button {
    background: #ffffff;
    border: 1px solid #898989;
    width: 45px;
    height: 45px;
    font-size: 16px;
    text-align: center;
  }
`;
const NumberField = ({ ...props }: any) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field] = useField(props);
  const value = Number(field.value);

  useEffect(() => {
    if (!field.value) {
      setFieldValue(field.name, 1);
    }
  }, [field.value]);

  const handleIncrement = useCallback(() => {
    const prevValue = value || 0;
    setFieldTouched(field.name, true);
    setFieldValue(field.name, prevValue + 1);
  }, [setFieldValue, setFieldTouched, value]);

  const handleDecrement = useCallback(() => {
    const prevValue = value || 0;
    if (prevValue > 1) {
      setFieldTouched(field.name, true);
      setFieldValue(field.name, prevValue < 1 ? 1 : prevValue - 1);
    }
  }, [setFieldValue, setFieldTouched, value]);

  const handleInputChange = useCallback(
    (event: any) => {
      const newValue = Number(event.target.value);
      setFieldTouched(field.name, true);
      setFieldValue(field.name, newValue);
    },
    [setFieldValue, setFieldTouched, value]
  );

  return (
    <NumberFieldWrapper className="numberField">
      <button type="button" className="decrement" onClick={handleDecrement}>
        -
      </button>
      <input type="number" className="max-w-[50px] text-xs text-center" value={value} onChange={handleInputChange} />
      <button type="button" className="increment" onClick={handleIncrement}>
        +
      </button>
    </NumberFieldWrapper>
  );
};

export default NumberField;
type Props = {
  value: number;
  onChange: (value: number) => void;
};

export const NumberFieldCheckout = ({ value, onChange }: Props) => {
  const handleDown = () => {
    const newValue = value - 1 <= 0 ? 1 : value - 1;
    onChange(newValue);
  };

  const handleUp = () => {
    const newValue = value + 1;
    onChange(newValue);
  };

  const handleChange = (e: any) => {
    const newValue = Number(e?.target?.value);
    onChange(newValue);
  };

  return (
    <NumberFieldWrapper className="numberField">
      <button type="button" className="decrement font-bold" onClick={handleDown}>
        -
      </button>
      <input
        type="number"
        className="max-w-[50px] text-xs text-center bg-white font-bold"
        value={value}
        onChange={handleChange}
      />
      <button type="button" className="increment font-bold" onClick={handleUp}>
        +
      </button>
    </NumberFieldWrapper>
  );
};
