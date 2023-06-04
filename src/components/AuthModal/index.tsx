import useUserStore, { UserStore } from '@/store/useUserStore';
import { useEffect, useState } from 'react';
import { CgCloseO } from 'react-icons/cg';
import { Container, Content, FormContainer, IconExit, Modal, TabItem, TabList } from './styled';
import useModalStore, { StoreModal } from '@/store/useModalStore';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm/registerForm';
const AuthModal = () => {
  const { name, hideModal } = useModalStore((state: any) => state);

  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  return name === StoreModal.LOGIN ? (
    <>
      <Modal>
        <Container>
          <IconExit onClick={() => hideModal()}>
            <CgCloseO />
          </IconExit>
          <TabList>
            <TabItem active={activeTab === 'login'} onClick={() => handleTabClick('login')}>
              Đăng nhập
            </TabItem>
            <TabItem active={activeTab === 'register'} onClick={() => handleTabClick('register')}>
              Đăng ký
            </TabItem>
          </TabList>
          <FormContainer>
            {activeTab === 'login' && <LoginForm />}
            {activeTab === 'register' && <RegisterForm />}
          </FormContainer>
        </Container>
      </Modal>
    </>
  ) : null;
};
export default AuthModal;
