import Link from 'next/link';
import {
  Item,
  Logo,
  MenuItems,
  MenuItemsWrapper,
  MenuWrapper,
  NavigatorHolder,
  ProfileDropdown,
  SignInButton
} from './navbarStyled';
import Image from 'next/image';
import logoImage from 'public/images/logo2.jpg';
import { RiShoppingCartLine } from 'react-icons/ri';
import { RiMessengerLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiUserReceived2Fill } from 'react-icons/ri';
import { useMemo, useState } from 'react';
import useUserStore, { UserStore } from '@/store/useUserStore';
import useModalStore, { StoreModal } from '@/store/useModalStore';
import Notification from '../Notification';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { user } = useUserStore(store => store) as UserStore;
  const openModal = useModalStore((state: any) => state.openModal);
  const [isShowDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const displayName = useMemo(() => {
    if (user) {
      return <div className="signInName"> {user.fullName}</div>;
    } else {
      return (
        <div>
          <RiUserReceived2Fill />
        </div>
      );
    }
  }, [user]);

  const maybeProfileMenu = useMemo(() => {
    if (!user) return null;

    const tabs = [
      {
        id: 'user_profile',
        text: 'TÀI KHOẢN',
        linksTo: '/setting/profile',
        icon: '/images/account/image_Account.svg'
      },
      {
        id: 2,
        text: 'ĐĂNG XUẤT',
        isButton: true,
        linksTo: 'logout',
        icon: '/images/account/image_logout.svg'
      }
    ];
    return tabs?.map((menu: any) => (
      <Link
        href={`${menu.linksTo}`}
        key={menu?.linksTo}
        onClick={e => {
          if (menu.isButton) {
            e.preventDefault();
          }
          setTimeout(() => {
            setShowDropdown(false);
          }, 200);

          if (menu.linksTo === 'logout') {
            openModal(StoreModal.LOGOUT);
          }
        }}
      >
        <Image src={menu?.icon} alt={menu?.text} width={20} height={20} />
        <span>{menu?.text}</span>
      </Link>
    ));
  }, [user, openModal]);

  return (
    <NavigatorHolder>
      <Link href="/">
        <Logo>
          <Image src={logoImage} alt="NKShop" />
        </Logo>
      </Link>
      <MenuWrapper>
        <MenuItemsWrapper>
          <MenuItems>
            <Item isSelected={true}>
              <button
                onClick={() => {
                  if (user) {
                    router.push('/message');
                  } else {
                    Notification.Info('Đăng nhập tài khoản để gửi tin nhắn!');
                    openModal(StoreModal.LOGIN);
                  }
                }}
              >
                <RiMessengerLine />
              </button>
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
              <SignInButton
                onClick={() => {
                  if (user) {
                    setShowDropdown(pre => !pre);
                  } else {
                    openModal(StoreModal.LOGIN);
                  }
                }}
              >
                {displayName}
                {isShowDropdown && <ProfileDropdown>{maybeProfileMenu}</ProfileDropdown>}
              </SignInButton>
            </Item>
          </MenuItems>
        </MenuItemsWrapper>
      </MenuWrapper>
    </NavigatorHolder>
  );
}
