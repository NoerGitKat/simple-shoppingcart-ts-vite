import { Button, Container } from "react-bootstrap";
import { IShoppingCartContext } from "../interfaces";

export interface IChooseAmountProps
  extends Pick<
    IShoppingCartContext,
    "increaseCartQuantity" | "decreaseCartQuantity" | "removeFromCart"
  > {
  id: number;
  quantity: number;
}

export default function ChooseAmount({
  id,
  quantity,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
}: IChooseAmountProps) {
  return (
    <Container
      className="d-flex align-items-center flex-column"
      style={{ gap: ".5rem" }}
    >
      <div
        className="d-flex align-items-center justify-items-center"
        style={{ gap: ".5rem" }}
      >
        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
        <aside>
          <span className="fs-3">{quantity}</span> in cart
        </aside>
        <Button onClick={() => increaseCartQuantity(id)}>+</Button>
      </div>
      <Button onClick={() => removeFromCart(id)} variant="danger">
        Remove
      </Button>
    </Container>
  );
}
