import colors from '@/styles/colors';
import styled from 'styled-components';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { ErrorMessageInput } from '@/components/Input/styled';
import { AuthButton, FormInput } from '../LoginForm/styled';
import VerifyOTP from '../VerifyOTP';
import useOTP from '../../services/hooks/useOTP';
import PasswordInput from '@/components/Input/PasswordInput';

enum Step {
  ENTER_PHONE = 'enter_phone',
  ENTER_OTP = 'enter_otp',
  ENTER_PASSWORD = 'enter_password'
}

const Wrapper = styled.div`
  .login-loading-wrapper {
    margin-top: 20px;
    width: 100%;
    font-size: 14px;
    text-align: center;
  }

  .back {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 300;
    display: block;
    margin-top: 20px;
    cursor: pointer;

    :hover {
      color: ${colors.primary_color};
    }
  }

  form {
    width: 335px;
    margin: 0 auto;
  }

  .enterPhoneWrapper {
    background-color: #ffffff;

    .title {
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
      color: rgb(83, 92, 85);
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      padding-top: 40px;
    }

    .description {
      display: flex;
      justify-content: center;
      font-size: 0.9rem;
      font-weight: 300;
      color: rgb(83, 92, 85);
      margin-bottom: 1.5rem;
    }

    button {
      width: 100%;
      margin-top: 20px;
    }
  }
`;

enum SHOW_CONTENT {
  LOGIN,
  FORGOT
}
const ForgotPassword = ({ onBack }: any) => {
  const [step, setStep] = useState(Step.ENTER_PHONE);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const { getOtpFromPhoneNumber, handleResetPassword, isConfirm, isResettingPassword, handleConfirmOtp } = useOTP({
    onSubmitSuccess: () => {},
    setStep
  });

  if (step === Step.ENTER_PHONE) {
    return (
      <Wrapper>
        <div className="enterPhoneWrapper !bg-white">
          <h3 className="title">Đặt lại mật khẩu</h3>
          <span className="description">Vui lòng nhập số điện thoại để bắt đầu đặt lại mật khẩu</span>
          <Formik
            validateOnChange
            initialValues={{ phoneNumber: '' }}
            onSubmit={values => {
              setPhoneNumber(values.phoneNumber);
              setStep(Step.ENTER_OTP);
              getOtpFromPhoneNumber(values.phoneNumber);
            }}
          >
            <Form>
              <FormInput type="text" name="phoneNumber" placeholder="Số điện thoại" />
              <ErrorMessageInput name="phoneNumber" component="div" />
              <AuthButton type="submit" isLoading={false}>
                TIẾP TỤC
              </AuthButton>
            </Form>
          </Formik>
        </div>

        <span
          className="back"
          onClick={() => {
            onBack();
          }}
        >
          Quay lại
        </span>
      </Wrapper>
    );
  }

  if (step === Step.ENTER_OTP) {
    return (
      <Wrapper>
        <VerifyOTP
          title={'ĐẶT LẠI MẬT KHẨU'}
          description={`Vui lòng nhập mã OTP đã được gửi về \n số điện thoại ${phoneNumber?.slice(0, 7)}***`}
          phoneNumber={phoneNumber}
          onSubmitSuccess={handleConfirmOtp}
          registerVerify={false}
        />
      </Wrapper>
    );
  }
  if (step === Step.ENTER_PASSWORD) {
    return (
      <Wrapper>
        <div className="enterPhoneWrapper">
          <h3 className="title">Đặt lại mật khẩu</h3>
          <span className="description">Vui lòng nhập mật khẩu mới</span>
        </div>
        <Formik
          initialValues={{
            password: '',
            rePassword: ''
          }}
          onSubmit={handleResetPassword}
          validateOnChange
        >
          <Form>
            <PasswordInput
              name="password"
              style={{
                marginTop: 20
              }}
              placeholder="Mật khẩu mới"
            />
            <ErrorMessageInput name="password" component="div" />

            <PasswordInput
              name="rePassword"
              style={{
                marginTop: 20
              }}
              placeholder="Nhập lại mật khẩu mới"
            />
            <ErrorMessageInput name="rePassword" component="div" />

            <AuthButton
              type="submit"
              style={{
                marginTop: '20px'
              }}
              disabled={isResettingPassword}
              isLoading={false}
            >
              TIẾP TỤC
            </AuthButton>
          </Form>
        </Formik>
      </Wrapper>
    );
  }

  return <div></div>;
};
export default ForgotPassword;
