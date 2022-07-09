import { Button, Container } from "react-bootstrap";

export interface IChooseAmountProps {
  quantity: number;
}

export default function ChooseAmount({ quantity }: IChooseAmountProps) {
  return (
    <Container
      className="d-flex align-items-center flex-column"
      style={{ gap: ".5rem" }}
    >
      <div
        className="d-flex align-items-center justify-items-center"
        style={{ gap: ".5rem" }}
      >
        <Button>-</Button>
        <aside>
          <span className="fs-3">{quantity}</span> in cart
        </aside>
        <Button>+</Button>
      </div>
      <Button variant="danger">Remove</Button>
    </Container>
  );
}
