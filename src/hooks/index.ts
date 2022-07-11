import { useState } from "react";
import { ICartItem } from "../interfaces";

export function useCart(initialState = []) {
  const [cartItems, setCartItems] = useState<ICartItem[]>(initialState);
  const [isToggledCart, setisToggledCart] = useState(false);

  const toggleCart = () => setisToggledCart((prevState) => !prevState);

  const findItem = (id: number) =>
    cartItems.find((item: ICartItem) => item.id === id);

  const getItemQuantity = (id: number) => findItem(id)?.quantity || 0;

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (findItem(id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (findItem(id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const cartQuantity = cartItems.reduce(
    (quantity: number, item: ICartItem) => item.quantity + quantity,
    0,
  );

  return {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    cartQuantity,
    toggleCart,
    isToggledCart,
  };
}
