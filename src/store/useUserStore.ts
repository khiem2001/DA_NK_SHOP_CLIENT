import { create } from 'zustand';
import { clearAuthTokens, saveUserToken } from '../utils/auth';
import { UserPayload } from '@/graphql/generated';

export interface UserStore {
  token: {
    accessToken: string;
    refreshToken: string;
  };
  isLogin: boolean;
  user?: UserPayload;
  setUserData: (user: UserPayload | any) => void;
  logout: () => void;
  login: (
    token: {
      accessToken: string;
      refreshToken: string;
    },
    user: UserPayload
  ) => void;
}

const useUserStore = create((set, get) => ({
  user: null,
  isLogin: false,

  setUserData: (user: any) => {
    set({
      user,
      isLogin: true
    });
  },
  login: (
    token: {
      accessToken: string;
      refreshToken: string;
    },
    user: any
  ) => {
    saveUserToken({
      access: token.accessToken,
      refresh: token.refreshToken
    });
    set({
      token,
      user,
      isLogin: true
    });
  },
  logout: () => {
    set({
      user: null,
      isLogin: false
    });
    clearAuthTokens();
  }
}));
export default useUserStore;
