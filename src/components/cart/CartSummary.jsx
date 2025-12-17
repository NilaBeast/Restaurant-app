import { useCart } from "../../context/CartContext";

export default function CartSummary() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <h3 className="text-xl font-bold mt-5">
      Total: ₹{total}
    </h3>
  );
}
