import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';
import { pixel2fontSize } from '../../../../utils/pixel2fontSize';
import DefaultButton from '@/components/Button/DefaultButton';
import colors from '@/styles/colors';

export const LoginFormWrapper = styled.div`
  min-width: 330px;
  max-width: 600px;
  margin: 30px auto;
  align-items: center;
  padding: 50px;
  background-color: #fff;
  .title {
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    color: rgb(83, 92, 85);
    margin-bottom: 40px;
    text-transform: uppercase;
    @media screen and (max-width: 600px) {
      font-size: 20px;
      margin-top: 10px;
    }
  }
  .mobile-tab {
    display: none;
  }

  @media screen and (max-width: 600px) {
    min-width: unset;
    width: 100%;

    .mobile-tab {
      display: block;
      text-align: center;
      font-size: 16px;
      margin-top: 20px;
    }
  }

  .description {
    text-align: center;
    font-size: 13px;
    margin-bottom: 20px;
  }

  .loginFacebookWrapper {
    border: none;
    font-size: 0;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/images/icons/facebook_logo.png');
  }

  .orText {
    margin-top: 20px;
    text-align: center;
    line-height: 1.5;
    color: #333131;
    font-weight: 700;
    font-size: ${pixel2fontSize(12.36)};
    text-transform: uppercase;
  }

  .forgotContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
    color: rgb(114, 111, 111);
    font-weight: 300;
    font-size: 14px;
    font-family: Averta, serif;

    div[class*='Checkbox__CheckboxWrapper'] {
      gap: 3px;
      margin-bottom: -1px;
    }

    div[class*='checkbox'] {
      transform: scale(0.7);
    }

    .remember {
      display: flex;
      align-items: initial;
      gap: 10px;

      color: rgb(114, 111, 111);

      input {
        margin: 0;
        padding: 0;
      }

      @media only screen and(max-width: 600px) {
        font-weight: bold;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        text-align: right;
      }
    }

    .forgot {
      cursor: pointer;
      white-space: pre;
      :hover {
        color: ${colors.primary_color};
      }
    }
  }
`;

export const FormInput = styled(Field)<{ disabled?: boolean }>`
  display: block;
  width: 100%;
  height: 50px;
  box-shadow: rgb(223 223 223) 0 0 3px 3px inset;
  padding: 20px;
  color: black;
  border: none;
  font-weight: 300;
  font-size: 1rem;
  ${({ disabled }) => disabled && `pointer-events: none;`};
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
export const AuthButton = styled(DefaultButton)<{ isLoading?: boolean }>`
  ${({ isLoading }) => `
        opacity: ${isLoading ? 0.4 + '!important' : 1};
  `}

  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  max-width: 340px;
  position: relative;
  z-index: 0;
  border-radius: 0;
  height: 50px;
  padding: 0;
  font-family: Averta, serif;
  font-weight: 600;
  font-size: ${pixel2fontSize(15)};
  display: block;
  margin-bottom: 20px;
  margin-top: 40px;
  background-color: #000;
  :disabled {
    opacity: 0.5;
  }

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media only screen and (max-width: 960px) {
    font-size: 11px;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    width: 100%;
    height: 30px;
  }
`;
