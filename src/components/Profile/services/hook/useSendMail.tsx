import Notification from '@/components/Notification';
import { useSendEmailMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useCallback, useState } from 'react';

const useSendEmail = () => {
  const [sessionId, setSessionId] = useState<any>();
  const { mutate: sendEmail, isLoading: isLoadingSendMail } = useSendEmailMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      setSessionId(data.sendEmail.sessionId);
      Notification.Success('Vui lòng kiểm tra Email của bạn!');
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleSendEmail = useCallback(
    (values: any) => {
      sendEmail({ input: values });
    },
    [sendEmail]
  );

  return {
    handleSendEmail,
    sessionId,
    isLoadingSendMail
  };
};
export default useSendEmail;
