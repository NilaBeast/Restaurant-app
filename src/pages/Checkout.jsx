import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orderService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Checkout() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    try {
      await createOrder(cart, totalPrice);
      toast.success("Order placed successfully 🎉");
      setCart([]); // clear cart
      navigate("/orders");
    } catch (error) {
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="border p-3 rounded mb-3 flex justify-between"
        >
          <span>
            {item.name} × {item.qty}
          </span>
          <span>₹{item.price * item.qty}</span>
        </div>
      ))}

      <h3 className="text-xl font-bold mt-6">
        Total: ₹{totalPrice}
      </h3>

      <button
        onClick={placeOrder}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
}
