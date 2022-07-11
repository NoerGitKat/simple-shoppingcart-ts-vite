import { useMemo } from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { IProduct } from "../interfaces";
import { formatCurrency } from "../utilities";
import ChooseAmount from "./ChooseAmount";

interface IProductProps extends IProduct {}

export default function Product({ id, name, price, imgUrl }: IProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    cartQuantity,
    toggleCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const formattedPrice = useMemo(() => formatCurrency(price), [price]);

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} height="200px" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formattedPrice}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <ChooseAmount
              id={id}
              quantity={quantity}
              increaseCartQuantity={increaseCartQuantity}
              decreaseCartQuantity={decreaseCartQuantity}
              removeFromCart={removeFromCart}
            />
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
