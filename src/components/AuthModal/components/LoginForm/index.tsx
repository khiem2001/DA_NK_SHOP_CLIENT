import React from 'react';
import { AuthButton, FormInput, LoginFormWrapper } from './styled';
import { Form, Formik } from 'formik';
import { ErrorMessageInput } from '@/components/Input/styled';
import PasswordInput from '@/components/Input/PasswordInput';
import Checkbox from '@/components/Form/Checkbox';
import useLoginForm from '../../services/hooks/useLoginForm';
import VerifyOTP from '../VerifyOTP';
import { LOGIN_CONTENT } from '@/constants/common';
import ForgotPassword from '../ForgotPassword';
import SocialLogin from '@/components/AuthModal/components/SocialLogin';

const LoginForm = () => {
  const { handleSubmit, setShowContent, isLoading, showContent, inputLogin, onLogin, handleVerifyOTPSuccess } =
    useLoginForm();

  if (showContent === LOGIN_CONTENT.VERIFY_USER) {
    return (
      <VerifyOTP
        title="Xác minh"
        description="Vui lòng xác minh OTP để đăng nhập"
        phoneNumber={inputLogin?.phoneNumber}
        onSubmitSuccess={handleVerifyOTPSuccess}
      />
    );
  }

  if (showContent === LOGIN_CONTENT.FORGOT) {
    return (
      <LoginFormWrapper>
        <ForgotPassword onBack={() => setShowContent(LOGIN_CONTENT.LOGIN)} setShowedContent={setShowContent} />
      </LoginFormWrapper>
    );
  }
  return (
    <LoginFormWrapper>
      <h3 className="title">ĐĂNG NHẬP</h3>
      <Formik initialValues={{ phoneNumber: '', password: '' }} onSubmit={handleSubmit} validateOnChange>
        <Form>
          <FormInput type="text" name="phoneNumber" placeholder="Số điện thoại" />
          <ErrorMessageInput name="phoneNumber" component="div" />
          <PasswordInput
            name="password"
            style={{
              marginTop: 20
            }}
            placeholder="Mật khẩu"
          />
          <ErrorMessageInput name="password" component="div" />
          <div className="forgotContainer flex justify-between">
            <Checkbox label="Ghi nhớ" />
            <span
              className="forgot"
              onClick={() => {
                setShowContent(LOGIN_CONTENT.FORGOT);
              }}
            >
              Quên mật khẩu
            </span>
          </div>
          <div className="flex justify-center">
            <AuthButton type="submit" disabled={isLoading}>
              {isLoading ? 'ĐANG ĐĂNG NHẬP...' : 'ĐĂNG NHẬP'}
            </AuthButton>
          </div>
          <div className="social">
            <p className="mb-1 orText">Hoặc Đăng nhập bằng</p>
            <SocialLogin />
          </div>
        </Form>
      </Formik>
    </LoginFormWrapper>
  );
};

export default LoginForm;
