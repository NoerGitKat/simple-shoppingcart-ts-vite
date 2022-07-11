import { ReactNode } from "react";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export interface IContext {
  children: ReactNode;
}

export interface IShoppingCartContext {
  cartQuantity: number;
  cartItems: ICartItem[];
  toggleCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  isToggledCart: boolean;
}

export interface ICartItem {
  id: number;
  quantity: number;
}
