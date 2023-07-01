import { LoadingCenter } from '@/components/Loading';
import Message from '@/components/Message';
import useCreateConversation from '@/components/Message/services/hook/useCreateConversation';
import { useGetIdAdmin } from '@/components/Message/services/hook/useGetIdAdmin';
import { ConversationType } from '@/graphql/generated';
import useUserStore, { UserStore } from '@/store/useUserStore';
import React, { useEffect, useState } from 'react';

const MessagePage = () => {
  const { idAdmin, isLoading } = useGetIdAdmin();
  const { user } = useUserStore(store => store) as UserStore;
  const [show, setShow] = useState(false);
  const { handleCreateConversation } = useCreateConversation();

  useEffect(() => {
    if (!isLoading && idAdmin && user && !show) {
      setShow(true);
      handleCreateConversation({
        name: `${idAdmin}${user?._id}`,
        type: ConversationType.Personal
      });
    }
  }, [isLoading, user]);

  return <div className="py-28 px-80 max-[1000px]:px-20">{show ? <Message /> : <LoadingCenter />}</div>;
};

export default MessagePage;
