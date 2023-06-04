import useUserStore, { UserStore } from '@/store/useUserStore';
import { useCallback, useRef } from 'react';
import useModalStore, { StoreModal } from '../../store/useModalStore';
import { ButtonCancel, ButtonConfirm, LogoutModalWrapper } from './style';
import { useRouter } from 'next/router';

export default function LogoutModal() {
  const { name: showedModal, hideModal, config } = useModalStore((state: any) => state);
  const { logout } = useUserStore(state => state) as UserStore;
  const router = useRouter();

  const handleConfirm = useCallback(() => {
    logout();
    hideModal();
    router.push('/');
  }, [config?.content, hideModal, logout]);

  if (showedModal !== StoreModal.LOGOUT) return null;

  const title = config?.content || 'Bạn chắc chắn muốn đăng xuất tài khoản?';
  return (
    <LogoutModalWrapper>
      <div className="animate__animated animate__fadeInDown popup">
        <p className="title mb-2">{title}</p>
        <div className="button-container">
          <ButtonCancel onClick={() => hideModal()}>Quay lại</ButtonCancel>
          <ButtonConfirm onClick={handleConfirm}>Xác nhận</ButtonConfirm>
        </div>
      </div>
    </LogoutModalWrapper>
  );
}
