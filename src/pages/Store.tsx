import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../data/items.json";
import { IProduct } from "../interfaces";

export interface IStoreProps {}

export default function Store(props: IStoreProps) {
  return (
    <main>
      <Row md={2} lg={3} className="g-3">
        {products.map((product: IProduct) => (
          <Col key={product.id}>{<Product {...product} />}</Col>
        ))}
      </Row>
    </main>
  );
}
