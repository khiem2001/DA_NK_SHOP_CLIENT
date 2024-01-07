import styled from 'styled-components';
import logoImage from 'public/images/logo2.jpg';
import Image from 'next/image';
import AuthModal from '../AuthModal';
import LogoutModal from '../LogoutModal/logoutModal';
import { GiPositionMarker } from 'react-icons/gi';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';

const FooterContainer = styled.footer`
  background-color: #000000;
  padding: 40px;
  text-align: center;
  img {
    width: 150px;
    height: auto;
    margin-bottom: 30px;
  }
`;

const FooterText = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 10px;
  align-items: center;
`;

const Footer = () => {
  return (
    <>
      <LogoutModal />
      <AuthModal />
      <FooterContainer className="grid grid-cols-3 items-center ">
        {/* <Image src={logoImage} alt="Logo" /> */}
        <div>
          <h1>Moriitalia</h1>
          <h1>Make Life Easier</h1>
        </div>
        <div>
          <FooterText className="flex align-middle ">
            <GiPositionMarker className="mr-2 items-center" />
            175 Tây Sơn, Đống Đa, Hà Nội
          </FooterText>
          <FooterText className="flex align-middle">
            <BsTelephoneOutboundFill className="mr-2" />
            0368278857
          </FooterText>
          <FooterText className="flex align-middle">
            <AiFillMail className="mr-2" />
            khiem22072001@gmail.com
          </FooterText>
        </div>

        <FooterText>© Copyright 2023 Moriitalia.</FooterText>
      </FooterContainer>
    </>
  );
};
export default Footer;
