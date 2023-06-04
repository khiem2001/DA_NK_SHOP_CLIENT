import useMessageStore, { MessageStore } from '@/store/useMessageStore';
import React from 'react';
import Avatar from '../Avatar';
import ConversationBox from './conversationBox';
import { FaWindowClose } from 'react-icons/fa';
import { LoadingCenter } from '@/components/Loading';
import { useRouter } from 'next/router';

const Conversation = () => {
  const { conversation, setConversationData } = useMessageStore(store => store) as MessageStore;
  const router = useRouter();

  return (
    <div className="w-full mt-5 border-2 border-slate-300 border-l-0 flex flex-col align-middle  justify-center">
      {conversation ? (
        <div className="bg-white w-full pt-5 border-l-2 flex flex-col h-full">
          <div className="flex py-2 px-10 border-b-2 justify-between">
            <div className="flex  align-middle items-center">
              <Avatar props={{ image: conversation.avatarUrl }} />
              <p className="text-black ml-5 mb-2 text-xl">{conversation.nameUser}</p>
            </div>
            <button onClick={() => router.push('/')}>
              <FaWindowClose className="text-3xl mb-7" />
            </button>
          </div>

          <ConversationBox props={{ _id: conversation._id }} />
        </div>
      ) : (
        <LoadingCenter />
      )}
    </div>
  );
};

export default Conversation;
