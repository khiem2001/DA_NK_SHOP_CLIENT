import styled from 'styled-components';
import logoImage from 'public/images/logo2.jpg';
import Image from 'next/image';
import AuthModal from '../AuthModal';
import LogoutModal from '../LogoutModal/logoutModal';

const FooterContainer = styled.footer`
  background-color: #000000;
  padding: 20px;
  text-align: center;
  img {
    width: 150px;
    height: auto;
    margin-bottom: 30px;
  }
`;

const FooterText = styled.p`
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Footer = () => {
  return (
    <>
      <LogoutModal />
      <AuthModal />
      <FooterContainer>
        <FooterText>175 Tây Sơn, Đống Đa, Hà Nội</FooterText>
        <FooterText>Số điện thoại: 0368278857</FooterText>
        <FooterText>Email: khiem22072001@gmail.com</FooterText>
        <FooterText>© Copyright 2023 NKSHOP.</FooterText>
        <Image src={logoImage} alt="Logo" />
      </FooterContainer>
    </>
  );
};
export default Footer;
