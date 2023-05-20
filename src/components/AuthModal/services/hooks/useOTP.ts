import Notification from '@/components/Notification';
import {
  useChangePasswordOutSideMutation,
  useInValidOtpMutation,
  useSendPhoneNumberToGetOtpMutation
} from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { useCallback, useState } from 'react';
import useLoginForm from './useLoginForm';
import { showErrorMessage } from '../../../../utils/error';

export enum RegisterStep {
  CREATE,
  VERIFY
}

enum Step {
  ENTER_PHONE = 'enter_phone',
  ENTER_OTP = 'enter_otp',
  ENTER_PASSWORD = 'enter_password'
}

const useOTP = ({ onSubmitSuccess, setStep }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisableResend, setIsDisableResend] = useState<boolean>(false);
  const [responseOtp, setResponseOtp] = useState<any>(null);
  const [sessionId_, setSessionId_] = useState<string>('');
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');
  const { handleSubmit } = useLoginForm();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { mutate: sendPhoneNumberToGetOTP, isLoading: isSending } = useSendPhoneNumberToGetOtpMutation(
    graphqlClientRequest(),
    {
      onSuccess: data => {
        if (data?.sendOtp) {
          setResponseOtp(data?.sendOtp);
          Notification.Success('Gửi mã OTP thành công vui lòng kiểm tra tin nhắn');
        } else {
          Notification.Error('Hệ thống xảy ra lỗi không xác định. Vui lòng thử lại sau');
        }
      },
      onError: error => {
        showErrorMessage(error);
      }
    }
  );
  const getOtpFromPhoneNumber = useCallback(
    (phoneNumber: string) => {
      setPhoneNumber(phoneNumber);
      sendPhoneNumberToGetOTP({
        input: {
          phoneNumber
        }
      });
    },
    [sendPhoneNumberToGetOTP]
  );

  const { mutate: inValidOTP, isLoading: isConfirming } = useInValidOtpMutation(graphqlClientRequest(), {
    onSuccess: data => {
      if (data?.inValidOtp) {
        setIsConfirm(data?.inValidOtp?.confirmed || false);
        setStep(Step.ENTER_PASSWORD);
        Notification.Success('Vui lòng nhập mật khẩu mới');
        setStep(Step.ENTER_PASSWORD);
      } else {
        Notification.Error('Hệ thống xảy ra lỗi không xác định. Vui lòng thử lại sau');
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleSubmitOtp = useCallback(
    (otp: string, sessionId: string) => {
      setOtp(otp);
      setSessionId_(sessionId);
      onSubmitSuccess(otp, sessionId);
    },
    [onSubmitSuccess]
  );

  const handleConfirmOtp = useCallback(
    (otp: string, sessionId: string) => {
      setOtp(otp);
      setSessionId_(sessionId);
      inValidOTP({
        otp,
        sessionId: sessionId || responseOtp?.sessionId
      });
    },
    [inValidOTP, responseOtp?.sessionId]
  );
  const { isLoading: isResettingPassword, mutate: resetPasswordMutate } = useChangePasswordOutSideMutation(
    graphqlClientRequest(),
    {
      onSuccess: () => {
        handleSubmit({
          phoneNumber: phoneNumber,
          password: password
        });
      },
      onError: error => {
        showErrorMessage(error);
      }
    }
  );

  const handleResetPassword = useCallback(
    (values: any) => {
      setPassword(values?.password || '');
      resetPasswordMutate({
        password: values?.password || '',
        confirmPassword: values?.rePassword || '',
        otp: otp || '',
        sessionId: sessionId_ || responseOtp?.sessionId || ''
      });
    },
    [otp, resetPasswordMutate, responseOtp?.sessionId, sessionId_]
  );
  return {
    isDisableResend,
    isResettingPassword,
    setIsDisableResend,
    isLoading,
    getOtpFromPhoneNumber,
    otp,
    setOtp,
    setResponseOtp,
    responseOtp,
    handleSubmitOtp,
    handleResetPassword,
    isConfirm,
    handleConfirmOtp,
    sendPhoneNumberToGetOTP
  };
};
export default useOTP;
