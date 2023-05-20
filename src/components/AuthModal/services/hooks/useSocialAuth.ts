import Notification from '@/components/Notification';
import {
  LoginResponse,
  LoginSocialMutation,
  LoginSocialMutationVariables,
  Provider,
  useLoginSocialMutation
} from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import useModalStore from '@/store/useModalStore';
import useUserStore, { UserStore } from '@/store/useUserStore';
import { useCallback, useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { showErrorMessage } from '@/utils/error';

const useSocialAuth = () => {
  const { login } = useUserStore(store => store) as UserStore;
  const hideModal = useModalStore((state: any) => state.hideModal);

  const [loginInput, setLoginInput] = useState<LoginSocialMutationVariables>();

  const onLogin = (response?: LoginResponse | any) => {
    const token = {
      accessToken: response?.token,
      refreshToken: response?.refreshToken
    };
    const user = response?.payload;
    if (response?.token && user) {
      Notification.Success('Đăng nhập thành công');
      login(token, user);
      hideModal();
    } else {
      Notification.Error('Xảy ra lỗi không xác định. heheh');
    }
  };

  const { mutate: loginSocialMutate, isLoading: isLoginSocialLoading } = useLoginSocialMutation(
    graphqlClientRequest(),
    {
      onSuccess: (data: LoginSocialMutation) => {
        const response = data?.loginSocial;
        onLogin(response);
      },
      onError: (error: any) => {
        showErrorMessage(error);
      }
    }
  );

  // When login input changes, auto sign in
  useEffect(() => {
    if (loginInput) {
      loginSocialMutate({
        ...loginInput
      });
    }
  }, [loginInput]);

  // const handleLoginGoogle = useGoogleLogin({
  //   onSuccess: tokenResponse => {
  //     const { access_token: accessToken } = tokenResponse;
  //     if (!accessToken) {
  //       return;
  //     }

  //     setLoginInput({
  //       provider: Provider.Google,
  //       accessToken: accessToken
  //     });
  //   }
  // });

  const handleLoginApple = useCallback(
    async (values: any) => {
      const { id_token: idToken } = values?.authorization || {};
      if (!idToken) {
        return;
      }

      setLoginInput({
        provider: Provider.Apple,
        accessToken: idToken
      });
    },
    [setLoginInput]
  );

  const handleLoginFacebook = useCallback(
    async (values: any) => {
      const { accessToken } = values;
      if (!accessToken) {
        return;
      }

      setLoginInput({
        provider: Provider.Facebook,
        accessToken: accessToken
      });
    },
    [setLoginInput]
  );

  return {
    isLoginSocialLoading,
    handleLoginFacebook,
    handleLoginApple
    // handleLoginGoogle
  };
};
export default useSocialAuth;
