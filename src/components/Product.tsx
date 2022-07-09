import { useMemo } from "react";
import { Button, Card } from "react-bootstrap";
import { IProduct } from "../interfaces";
import { formatCurrency } from "../utilities";
import ChooseAmount from "./ChooseAmount";

interface IProductProps extends IProduct {}

export default function Product({ id, name, price, imgUrl }: IProductProps) {
  const formattedPrice = useMemo(() => formatCurrency(price), [price]);
  const quantity = 1;
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
            <Button>+ Add To Cart</Button>
          ) : (
            <ChooseAmount quantity={quantity} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
