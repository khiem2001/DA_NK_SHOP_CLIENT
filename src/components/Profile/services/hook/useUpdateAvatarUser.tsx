import Notification from '@/components/Notification';
import { useUpdateAvatarUserMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useCallback, useState } from 'react';

const useUpdateAvatarUser = () => {
  const { mutate: UpdateAvatarUser, isLoading } = useUpdateAvatarUserMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      if (data.updateAvatarUser.success) Notification.Success('Cập nhật ảnh đại diện thành công!');
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleUpdateAvatarUser = useCallback(
    (values: any) => {
      UpdateAvatarUser({ input: values });
    },
    [UpdateAvatarUser]
  );

  return {
    handleUpdateAvatarUser
  };
};
export default useUpdateAvatarUser;
