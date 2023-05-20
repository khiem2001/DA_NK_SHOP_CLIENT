import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';
import { pixel2fontSize } from '../../utils/pixel2fontSize';

export const InputWrapper = styled.div.attrs(() => ({
  className: 'input-holder'
}))`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  .max_width_error {
    max-width: 335px;
  }

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const InputInnerWrapper = styled.div`
  position: relative;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  font-size: ${pixel2fontSize(11)};
`;

export const InputErrorText = styled.span`
  color: #f00;
  font-size: 12px;
  margin-bottom: 10px;
  margin-left: 10px;
  max-width: 335px;
`;

export const NormalInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  box-shadow: rgb(223 223 223) 0 0 3px 3px inset;
  padding: 10px;
  color: black;
  border: none;
  font-weight: 300;
  font-size: 0.6875rem;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const FormInput = styled(Field)<{ disabled?: boolean }>`
  display: block;
  width: 100%;
  height: 50px;
  box-shadow: rgb(223 223 223) 0 0 3px 3px inset;
  padding: 10px;
  color: black;
  border: none;
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 20px;

  ${({ disabled }) => disabled && `pointer-events: none;`};
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
`;

export const ShowPasswordButton = styled.button<{ status: boolean }>`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15%;
  font-size: 0;
  ${({ status }) => `
        background: url(${status ? '/images/icons/eye-off.png' : '/images/icons/eye.png'});
  `};

  width: 25px;
  height: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
`;

export const ErrorMessageInput = styled(ErrorMessage)`
  color: rgb(255, 0, 0);
  font-size: 12px;
  max-width: 335px;
  margin: 5px 0;
  text-align: left;
`;

export const ErrorMessageText = styled.div`
  color: rgb(255, 0, 0);
  font-size: 12px;
  margin: 5px 0;
  text-align: left;
`;
