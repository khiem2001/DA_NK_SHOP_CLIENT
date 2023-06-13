import Notification from '@/components/Notification';
import { useUpdateProfileMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isLoading: isLoadingUpdate } = useUpdateProfileMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      Notification.Success('Cập nhật thông tin thành công');
      queryClient.invalidateQueries(['getMe']);
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleUpdateProfile = useCallback(
    (values: any) => {
      updateProfile({ input: values });
    },
    [updateProfile]
  );

  return {
    handleUpdateProfile,
    isLoadingUpdate
  };
};
export default useUpdateProfile;
