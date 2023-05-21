import styled from 'styled-components';
import { pixel2fontSize } from '../../../../utils/pixel2fontSize';

export const SignUpWrapper = styled.div`
  margin: 0 40px;
  padding-top: 25px;

  .mobile-tab {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .mobile-tab {
      display: block;
      text-align: center;
      font-size: 16px;
      margin-top: 20px;
    }
  }

  .error_message {
    margin-left: 20px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 55px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 80px;
  }

  .policy_signup {
    margin-top: -3px;
    font-weight: 300;
    font-size: ${pixel2fontSize(11)};

    a:hover {
      color: var(--link_color_hover);
    }

    .policy {
      font-weight: 700;
    }

    @media only screen and (max-width: 960px) {
      margin-top: 0px;
    }
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
`;

export const SignUpTab = styled.div`
  .two-tabs {
    display: flex;
  }

  span {
    flex: 1;
    height: 45px;
    font-family: Averta;
    font-weight: 700;
    font-size: ${pixel2fontSize(11)};
    text-align: center;
    line-height: 45px;
  }

  span:first-child {
    border-radius: 20px 20px 20px 0;
  }

  span:last-child {
    border-radius: 20px 20px 0 20px;
  }

  span:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .filler {
    width: 100%;
    height: 45px;
    margin-top: -22.5px;
    background: white;
  }

  @media only screen and (max-width: 960px) {
    span {
      font-size: 9px;
    }
  }
  @media only screen and (max-width: 600px) {
    .filler {
      //display: none;
      height: 15px;
    }

    /* span {
      width: 10px;
    } */
  }
`;

export const InSideFromWrapper = styled.div`
  /* overflow-y: scroll; */
  background: white;
  display: flex;
  width: 70%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  padding: 40px 0 5vh 0;
  height: 100%;

  .container-formik {
    max-height: 65vh;
    /* overflow: auto; */
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
  }

  @media only screen and (max-width: 600px) {
    max-height: 65vh;
    .container_formik {
      margin-top: 50px;
    }

    form {
      padding: 14px;
      margin-top: 20px;
    }
  }

  form {
    width: 355px;
  }

  .disableSubmit {
    pointer-events: none;
    opacity: 0.7;
  }

  .errorText {
    color: red;
    font-size: 12px;
  }

  .error_login {
    margin-left: 10px !important;
    max-width: 335px;
    @media only screen and (max-width: 600px) {
      font-size: 0.8rem;
    }
  }

  .rule-container {
    display: flex;
    flex-direction: column;

    .error_rules {
      font-size: 12px;
      color: red;
      margin-bottom: 15px;
    }

    div[class*='Checkbox__CheckboxWrapper'] {
      transform: scale(0.7);
      gap: 0;
      padding-right: 5px;
      display: inline-flex;
      @media only screen and (max-width: 600px) {
        width: 30px;
      }
    }

    display: flex;
    align-items: flex-start;
    gap: 0;
  }

  .main_policy {
    display: flex;
    align-items: center;
    gap: 5px;
    @media only screen and (max-width: 767px) {
      div {
        width: 5%;
      }
    }

    a {
      color: #4d4d4d;
      font-weight: 700;
      font-size: 12px;
      word-spacing: 1px;
    }
  }

  .list_policy {
    margin-top: 5px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    @media only screen and (max-width: 767px) {
      li {
        gap: 10px;

        div {
          width: 5%;
        }
      }
    }

    li {
      color: #4d4d4d;
      display: flex;
      font-size: 12px;
    }

    li: nth-child(1) {

    }
  }

  @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
    form {
      width: 100%;
    }
  }
`;

export const RegisterSuccessWrapper = styled.div`
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login-loading-wrapper {
    margin-top: 20px;
    width: 100%;
    font-size: 14px;
    text-align: center;
  }

  input {
    display: block;
    box-shadow: rgb(223 223 223) 0px 0px 3px 3px inset;
    max-width: 100%;
    padding: 10px;
    margin: 10px;
    color: black;
    border: none;
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    top: 100px;
  }
`;
