import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import db from "../data/items.json";
import { ICartItem } from "../interfaces";
import { formatCurrency } from "../utilities";
import CartItem from "./CartItem";

export interface IShoppingCartProps {}

export default function ShoppingCart(props: IShoppingCartProps) {
  const { isToggledCart, toggleCart, cartItems } = useShoppingCart();
  const totalPrice = cartItems.reduce((total, cartItem: ICartItem) => {
    const foundItem = db.find((item) => item.id === cartItem.id);
    return total + (foundItem?.price || 0) * cartItem.quantity;
  }, 0);
  return (
    <Offcanvas show={isToggledCart} onHide={toggleCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <aside className="ms-auto fw-bold fs-5">
            Total {formatCurrency(totalPrice)}
          </aside>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
