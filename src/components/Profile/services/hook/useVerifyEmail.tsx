import Notification from '@/components/Notification';
import { useVerifyEmailMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

const useVerifyEmail = () => {
  const queryClient = useQueryClient();

  const { mutate: verifyEmail, isLoading: isLoadingVerify } = useVerifyEmailMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      Notification.Success('Xác thực email thành công');
      queryClient.invalidateQueries(['getMe']);
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleVerifyEmail = useCallback(
    (values: any) => {
      verifyEmail({ input: values });
    },
    [verifyEmail]
  );

  return {
    handleVerifyEmail,
    isLoadingVerify
  };
};
export default useVerifyEmail;
