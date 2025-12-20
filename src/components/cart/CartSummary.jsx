import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
export default function CartSummary() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="mt-6 bg-gray-100 p-4 rounded-lg text-right">
      <h3 className="text-xl font-bold">
        Total: ₹{total}
      </h3>

      <button className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded">
        <Link to="/checkout">Checkout</Link>
      </button>
    </div>
  );
}
