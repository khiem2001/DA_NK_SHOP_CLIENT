import Notification from '@/components/Notification';
import { RegisterUserMutationVariables, useRegisterUserMutation, useVerifyPhoneMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import useModalStore from '@/store/useModalStore';
import { useCallback, useState } from 'react';
import useLoginForm from './useLoginForm';
import { showErrorMessage } from '../../../../utils/error';

export enum RegisterStep {
  CREATE,
  VERIFY
}

const useRegister = () => {
  const [step, setStep] = useState<RegisterStep>(RegisterStep.CREATE);
  const [input, setInput] = useState<RegisterUserMutationVariables>();
  const [otp, setOtp] = useState<string>('');
  const [verifyResponse, setVerifyResponse] = useState<any>();
  const { isLoading: isLoginLoading, handleSubmit } = useLoginForm();
  const setText = useModalStore((state: any) => state?.setText);

  const { mutate: verifyPhoneMutate } = useVerifyPhoneMutation(graphqlClientRequest(), {
    onSuccess: data => {
      if (data?.verifyPhone?.verified) {
        Notification.Success(`Xác thực thành công.`);
        handleSubmit({
          phoneNumber: input?.phoneNumber || '',
          password: input?.password || ''
        });
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const { mutate: registerMutate, isLoading: isRegisting } = useRegisterUserMutation(graphqlClientRequest(), {
    onSuccess: data => {
      if (data?.registerUser) {
        setVerifyResponse(data?.registerUser);
        Notification.Success('Đăng ký thành công vui lòng thực số điện thoại');
        setStep(RegisterStep.VERIFY);
      } else {
        Notification.Error('Hệ thống xảy ra lỗi không xác định. Vui lòng thử lại sau');
      }
    },
    onError: error => {
      setText('Tài khoản đã tồn tại');
      showErrorMessage(error);
    }
  });

  const handleCreateAccount = useCallback(
    (values: any) => {
      const data = {
        fullName: values.fullName,
        phoneNumber: values.phoneNumber,
        password: values.password
      };
      registerMutate(data);
      setInput(() => {
        return data;
      });
    },
    [setInput, registerMutate]
  );

  const handleVerifyOtpSuccess = useCallback(
    (otp: string, sessionId: string) => {
      return verifyPhoneMutate({
        sessionId: sessionId || verifyResponse?.sessionId,
        otp: otp
      });
    },
    [verifyPhoneMutate, verifyResponse?.sessionId]
  );

  return {
    isRegisting,
    step,
    otp,
    input,
    setOtp,
    handleCreateAccount,
    handleVerifyOtpSuccess
  };
};

export default useRegister;
