import { Form, Formik } from 'formik';
import { InSideFromWrapper, RegisterSuccessWrapper, SignUpWrapper } from './styled';
import PasswordInput from '@/components/Input/PasswordInput';
import { FormInput } from '@/components/Input/styled';
import { AuthButton } from '../LoginForm/styled';
import useRegister from '../../services/hooks/useRegister';
import VerifyOTP from '../VerifyOTP';

export enum RegisterStep {
  CREATE,
  VERIFY
}

const RegisterForm = () => {
  const { isRegisting, step, handleCreateAccount, input, handleVerifyOtpSuccess } = useRegister();
  if (step === RegisterStep.VERIFY) {
    const phoneNumber = input?.phoneNumber || '';
    return (
      <RegisterSuccessWrapper>
        <VerifyOTP
          title={'XÁC THỰC ĐĂNG KÍ'}
          description={`Vui lòng nhập mã OTP đã được gửi về \n số điện thoại ${phoneNumber?.slice(0, 7)}***`}
          phoneNumber={phoneNumber}
          onSubmitSuccess={handleVerifyOtpSuccess}
          registerVerify={true}
        />
      </RegisterSuccessWrapper>
    );
  }
  return (
    <>
      <SignUpWrapper>
        <InSideFromWrapper>
          <div className="container-formik">
            <h3 className="title">ĐĂNG KÝ</h3>

            <Formik
              initialValues={{}}
              onSubmit={values => {
                handleCreateAccount(values);
              }}
              validateOnChange={true}
            >
              <Form
                onChange={() => {
                  //   setText(null);
                }}
              >
                <FormInput type="text" name="fullName" placeholder="Họ tên" />
                <FormInput
                  type="text"
                  name="phoneNumber"
                  placeholder="Số điện thoại"
                  //   onKeyUp={onlyEnterPhoneNumber}
                />
                <PasswordInput name="password" placeholder="Mật khẩu" />
                <PasswordInput name="rePassword" placeholder="Nhập lại mật khẩu" />
                <div className="flex  justify-center">
                  <AuthButton type="submit" disabled={isRegisting} className="mt-2">
                    Đăng ký
                  </AuthButton>
                </div>
              </Form>
            </Formik>
          </div>
        </InSideFromWrapper>
      </SignUpWrapper>
    </>
  );
};
export default RegisterForm;
