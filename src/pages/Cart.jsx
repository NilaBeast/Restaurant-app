import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-gray-500">Cart is empty</p>
      )}

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {cart.length > 0 && <CartSummary />}
    </div>
  );
}
