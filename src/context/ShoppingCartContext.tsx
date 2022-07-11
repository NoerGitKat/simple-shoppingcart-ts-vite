import { createContext, useContext } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useCart } from "../hooks";
import { IContext, IShoppingCartContext } from "../interfaces";

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: IContext) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    cartQuantity,
    toggleCart,
    isToggledCart,
  } = useCart();

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        toggleCart,
        isToggledCart,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}
