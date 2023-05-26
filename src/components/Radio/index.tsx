import React, { useState } from 'react';
import { RadioWrapper } from './styled';

interface IRadioButtonProps {
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  className?: string;
  label?: any;
  htmlFor?: string;
  defaultChecked?: boolean;
}

const RadioButton = (props: IRadioButtonProps) => {
  const { id, name, onChange, checked, disabled, value, defaultChecked, label } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <RadioWrapper isChecked={isChecked}>
      <input
        onChange={onChange}
        id={id || 'radio'}
        type="radio"
        name={name || 'radio'}
        defaultChecked={defaultChecked}
        onClick={() => {
          setIsChecked(pre => !pre);
        }}
      />
      <label htmlFor={id || 'radio'}>{label}</label>
    </RadioWrapper>
  );
};

export default RadioButton;
