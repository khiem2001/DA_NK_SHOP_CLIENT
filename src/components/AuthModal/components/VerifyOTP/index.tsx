import Countdown from '@/components/Count/CountDown';
import { RegisterSuccessWrapper } from '../RegisterForm/styled';
import OtpInput from 'react-otp-input';
import { AuthButton } from '../LoginForm/styled';
import useOTP from '../../services/hooks/useOTP';

interface Props {
  title: string;
  description: string;
  phoneNumber: string;
  onSubmitSuccess: (sessionId: string, otp: string) => void;
  setStep?: (step: Step) => void;
  registerVerify?: boolean;
  isConfirm?: boolean;
}

enum Step {
  ENTER_PHONE = 'enter_phone',
  ENTER_OTP = 'enter_otp',
  ENTER_PASSWORD = 'enter_password'
}

const DEFAULT_PREFIX = '+84';
const VerifyOTP = (props: Props) => {
  const { phoneNumber, title, description, onSubmitSuccess } = props;

  const {
    isLoading,
    isDisableResend,
    responseOtp,
    setIsDisableResend,
    getOtpFromPhoneNumber,
    otp,
    setOtp,
    handleSubmitOtp
  } = useOTP({
    onSubmitSuccess
  });

  return (
    <RegisterSuccessWrapper className="flex-center mt-20">
      <h5 className="header-signup font-bold text-[20px] text-uppercase">{title}</h5>
      <p className="text-one-signup font-light">{description}</p>
      <div className="input-container mt-2">
        <OtpInput
          value={otp}
          onChange={(otpParam: string) => {
            setOtp(otpParam);
          }}
          numInputs={6}
          separator={<span />}
          inputStyle={{ width: '38px', height: '48px' }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '0.6625rem',
          fontWeight: '300',
          marginBottom: '10px'
        }}
      >
        <button
          onClick={() => {
            getOtpFromPhoneNumber(phoneNumber);
          }}
          disabled={!isDisableResend}
        >
          {`Gửi lại OTP`}{' '}
          {!isDisableResend && (
            <>
              (
              <Countdown
                minute={0}
                second={120}
                onDone={() => {
                  setIsDisableResend(true);
                }}
              />
              )
            </>
          )}
        </button>
      </div>

      <AuthButton
        disabled={isLoading || !otp || otp === ''}
        type="submit"
        onClick={() => {
          handleSubmitOtp(otp, responseOtp?.sessionId);
        }}
      >
        TIẾP TỤC
      </AuthButton>
    </RegisterSuccessWrapper>
  );
};

export default VerifyOTP;
