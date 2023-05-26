import { LS_USER_REFRESH_TOKEN, LS_USER_TOKEN } from '@/constants';
import { MyLocalStorage } from './localStorage';

const localStorage = MyLocalStorage();
export const saveUserToken = (tokens: { access: string; refresh: string }) => {
  localStorage.setItem(LS_USER_TOKEN, tokens.access);
  localStorage.setItem(LS_USER_REFRESH_TOKEN, tokens.refresh);
};
export const clearAuthTokens = () => {
  localStorage.removeItem(LS_USER_TOKEN);
  localStorage.removeItem(LS_USER_REFRESH_TOKEN);
};
export const getTokens = () => {
  return {
    access: localStorage.getItem(LS_USER_TOKEN),
    refresh: localStorage.getItem(LS_USER_REFRESH_TOKEN)
  };
};
