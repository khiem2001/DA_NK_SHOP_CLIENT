import Notification from '@/components/Notification';
import { LOGIN_CONTENT } from '@/constants/common';
import { useUserLoginByPhoneMutation, useVerifyPhoneMutation } from '@/graphql/generated';
import { useSendPhoneNumberToGetOtpMutation } from '@/graphql/generated';
import { UserLoginByPhoneMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import useModalStore from '@/store/useModalStore';
import useUserStore, { UserStore } from '@/store/useUserStore';
import { useCallback, useState } from 'react';
import { getErrorMessage, showErrorMessage } from '../../../../utils/error';

const useLoginForm = () => {
  const { setUserData, login } = useUserStore(store => store) as UserStore;
  const [loginData, setLoginData] = useState<any>();
  const [inputLogin, setInputLogin] = useState<any>();
  const [OtpResponse, setOtpResponse] = useState<any>();
  const [showContent, setShowContent] = useState<LOGIN_CONTENT>(LOGIN_CONTENT.LOGIN);
  const hideModal = useModalStore((state: any) => state.hideModal);
  const onLogin = (response?: UserLoginByPhoneMutation | any) => {
    const token = response?.token;
    const refreshToken = response?.refreshToken;
    const user = response?.payload;
    if (token && user) {
      setUserData(user);
      login(
        {
          accessToken: token,
          refreshToken: refreshToken
        },
        user
      );
      Notification.Success('Đăng nhập thành công');

      hideModal();
    } else {
      Notification.Error('Xảy ra lỗi không xác định');
    }
  };

  const { mutate: sendPhoneNumberToGetOTP, isLoading: isSending } = useSendPhoneNumberToGetOtpMutation(
    graphqlClientRequest(),
    {
      onSuccess: data => {
        if (data?.sendOtp) {
          setOtpResponse(data?.sendOtp);
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

  const { mutate: loginWithPhoneNumber, isLoading } = useUserLoginByPhoneMutation(graphqlClientRequest(), {
    onSuccess: data => {
      const response = data?.loginUser;
      if (response?.payload?.verifyPhone) {
        onLogin(response);
      } else {
        Notification.Error('Vui lòng xác thực số điện thoại trước khi đăng nhập');
        setShowContent(LOGIN_CONTENT.VERIFY_USER);
        sendPhoneNumberToGetOTP({
          input: {
            phoneNumber: response?.payload?.phoneNumber || ''
          }
        });
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleSubmit = useCallback(
    (values: { phoneNumber: string; password: string }) => {
      const variables = {
        phoneNumber: values.phoneNumber,
        password: values.password
      };
      setInputLogin(variables);
      loginWithPhoneNumber(variables);
    },
    [loginWithPhoneNumber]
  );
  const { mutate: verifyPhoneMutate } = useVerifyPhoneMutation(graphqlClientRequest(), {
    onSuccess: data => {
      if (data?.verifyPhone?.verified) {
        Notification.Success(`Xác thực thành công.`);
        handleSubmit({
          phoneNumber: inputLogin?.phoneNumber,
          password: inputLogin?.password
        });
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleVerifyOTPSuccess = useCallback(
    (otp: string) => {
      return verifyPhoneMutate({
        sessionId: OtpResponse?.sessionId,
        otp: otp
      });
    },
    [OtpResponse?.sessionId, verifyPhoneMutate]
  );
  return {
    showContent,
    setShowContent,
    handleSubmit,
    onLogin,
    isLoading,
    loginData,
    inputLogin,
    OtpResponse,
    handleVerifyOTPSuccess
  };
};
export default useLoginForm;
