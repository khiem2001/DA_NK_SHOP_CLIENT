import React, { useEffect } from 'react';
import { useGetIdAdmin } from './services/hook/useGetIdAdmin';
import useCreateConversation from './services/hook/useCreateConversation';
import { ConversationType } from '@/graphql/generated';
import useUserStore, { UserStore } from '@/store/useUserStore';
import Conversation from './components/Conversation';

const Message = () => {
  const { user } = useUserStore(store => store) as UserStore;
  const { idAdmin, isLoading } = useGetIdAdmin();
  const { handleCreateConversation } = useCreateConversation();
  useEffect(() => {
    if (idAdmin && user) {
      handleCreateConversation({
        name: `${idAdmin}${user?._id}`,
        type: ConversationType.Personal
      });
    }
  }, [idAdmin]);
  return (
    <div>
      <Conversation />
    </div>
  );
};

export default Message;
