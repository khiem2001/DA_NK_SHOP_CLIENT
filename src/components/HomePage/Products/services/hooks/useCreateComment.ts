import Notification from '@/components/Notification';
import { useCreateCommentMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const useCreateComment = () => {
  const queryClient = useQueryClient();
  const { mutate: createComment, isLoading } = useCreateCommentMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      if (data?.createComment?.productId) {
        const _id = data.createComment.productId;
        Notification.Success(`Bạn đã bình luận sản phẩm !`);
        queryClient.invalidateQueries(['getListComment']);
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handleCreateComment = useCallback(
    (message: string, productId: string) => {
      return createComment({
        input: {
          message,
          productId
        }
      });
    },
    [createComment]
  );

  return { handleCreateComment, isLoading };
};
export default useCreateComment;
