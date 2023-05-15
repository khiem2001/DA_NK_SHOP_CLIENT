import Link from 'next/link';
import { Item, Logo, MenuItems, MenuItemsWrapper, MenuWrapper, NavigatorHolder } from './navbarStyled';
import Image from 'next/image';
import logoImage from 'public/images/logo2.jpg';
import { RiShoppingCartLine } from 'react-icons/ri';
import { RiMessengerLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiUserReceived2Fill } from 'react-icons/ri';

export default function Navbar() {
  return (
    <NavigatorHolder>
      <Link href="/">
        <Logo>
          <Image src={logoImage} alt="MetaHall" />
        </Logo>
      </Link>
      <MenuWrapper>
        <MenuItemsWrapper>
          <MenuItems>
            <Item isSelected={true}>
              <Link href="/">
                <RiMessengerLine />
              </Link>
            </Item>
            <Item isSelected={false}>
              <Link href="/">
                <RiShoppingCartLine />
              </Link>
            </Item>
            <Item isSelected={false}>
              <Link href="/">
                <IoMdNotificationsOutline />
              </Link>
            </Item>
            <Item isSelected={false}>
              <Link href="/">
                <RiUserReceived2Fill />
              </Link>
            </Item>
          </MenuItems>
        </MenuItemsWrapper>
      </MenuWrapper>
    </NavigatorHolder>
  );
}
