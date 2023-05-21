import { create } from 'zustand';

export enum StoreModal {
  LOGIN,
  LOGOUT
}

const useModalStore = create((set, get) => ({
  name: null,
  config: {},
  openModal: (name: StoreModal, config: any) => {
    set({ name, config });
  },
  hideModal: () => {
    set({ name: null, config: null });
  },
  text: null,
  setText: (text: string) => {
    set({ text });
  }
}));

export default useModalStore;
