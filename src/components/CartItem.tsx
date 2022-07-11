import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import db from "../data/items.json";
import { formatCurrency } from "../utilities";

export interface ICartItemProps {
  id: number;
  quantity: number;
}

export default function CartItem({ id, quantity }: ICartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const currentItem = db.find((item) => item.id === id) || null;
  if (!currentItem) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={currentItem?.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={currentItem?.name}
      />
      <aside className="me-auto">
        <article>
          {currentItem?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </article>
        <article className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(currentItem.price)}
        </article>
      </aside>
      <aside>{formatCurrency(currentItem?.price * quantity)}</aside>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(currentItem.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
