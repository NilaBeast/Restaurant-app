import { useCart } from "../../context/CartContext";

export default function CartSummary() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <h3 className="text-xl font-bold mt-6">
      Total: ₹{total}
    </h3>
  );
}
