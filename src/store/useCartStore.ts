import { create } from 'zustand';
import { isBrowser } from '@/utils/browser';
import { LS_CARD_KEY } from '@/constants';

export interface CartItem {
  productId: string;
  quantity: number;
  status: boolean;
  price: number;
}

export interface CartStore {
  isDirectBuy: boolean;
  items: CartItem[];
  addItem: (item: CartItem) => void;
  changeQuantity: (productId: string, quantity: number) => void;
  deleteItem: (productId: string) => void;
}

const getCartFromLocalStorage = () => {
  if (isBrowser) {
    const localData = localStorage.getItem(LS_CARD_KEY);
    return localData ? JSON.parse(localData) : [];
  }
  return [];
};

const syncCartWithLocalStorage = (items: CartItem[]) => {
  if (isBrowser) {
    localStorage.setItem(LS_CARD_KEY, JSON.stringify(items));
  }
};

const useCartStore = create((set, get: any) => ({
  isDirectBuy: false,
  items: getCartFromLocalStorage(),
  setDirectBuy: (isDirectBuy: boolean) => {
    set({ isDirectBuy });
  },
  addItem: (item: CartItem) => {
    // find items in cart
    let _items = get().items || [];
    const existItemIndex = _items
      ?.filter(Boolean)
      ?.findIndex((_item: CartItem) => _item?.productId === item?.productId);
    if (existItemIndex > -1) {
      _items[existItemIndex].quantity += 1;
    } else {
      _items = [..._items, item];
    }

    syncCartWithLocalStorage(_items);
    set({ items: _items });
  },
  changeQuantity: (productId: string, quantity: number) => {
    let _items = get().items || [];
    const existItemIndex = _items?.filter(Boolean)?.findIndex((_item: CartItem) => _item?.productId === productId);
    if (existItemIndex > -1) {
      _items[existItemIndex].quantity += quantity;
      if (_items[existItemIndex].quantity <= 0) {
        delete _items[existItemIndex];
      }
      syncCartWithLocalStorage(_items.filter(Boolean));
      set({ items: _items.filter(Boolean) });
    }
  },
  deleteItem: (productId: string) => {
    let _items = get().items || [];
    let filteredItems = _items?.filter((item: CartItem) => item.productId === productId).filter(Boolean);
    syncCartWithLocalStorage(_items);

    set({
      items: filteredItems
    });
  },
  clear: () => {
    set({
      items: []
    });
    localStorage.removeItem(LS_CARD_KEY);
  }
}));

export default useCartStore;
