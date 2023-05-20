import React, { useState } from 'react';
import { FormInput, PasswordInputWrapper, ShowPasswordButton } from './styled';

const PasswordInput = (props: any) => {
  const [isShowPassword, setShowPassword] = useState(false);

  return (
    <PasswordInputWrapper>
      <FormInput type={isShowPassword ? 'text' : 'password'} {...props} />
      <ShowPasswordButton type="button" status={isShowPassword} onClick={() => setShowPassword(prev => !prev)} />
    </PasswordInputWrapper>
  );
};

export default PasswordInput;
