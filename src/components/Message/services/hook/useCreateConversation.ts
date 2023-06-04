import { CreateConversationInput, useCreateConversationMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import useMessageStore, { MessageStore } from '@/store/useMessageStore';
import { showErrorMessage } from '@/utils/error';
import { useCallback } from 'react';

const useCreateConversation = () => {
  const { setConversationData } = useMessageStore(store => store) as MessageStore;
  const { mutate: createConversation, isLoading } = useCreateConversationMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      setConversationData({
        _id: data.createConversation.conversation._id,
        avatarUrl: '/images/account/admin.jpg',
        nameUser: 'Admin'
      });
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleCreateConversation = useCallback(
    (values: CreateConversationInput) => {
      createConversation({ input: values });
    },
    [createConversation]
  );

  return {
    handleCreateConversation
  };
};
export default useCreateConversation;
