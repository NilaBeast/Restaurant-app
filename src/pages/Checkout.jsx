import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orderService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import bgImage from "../assets/hero/Heroimage.jpeg";

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
      setCart([]);
      navigate("/orders");
    } catch {
      toast.error("Failed to place order");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/70 backdrop-blur-xl rounded-2xl p-8 max-w-3xl mx-auto text-white"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">
          ✅ Checkout
        </h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b border-white/20 py-3"
          >
            <span>
              {item.name} × {item.qty}
            </span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

        <h3 className="text-2xl font-bold mt-6 text-center">
          Total: ₹{totalPrice}
        </h3>

        <button
          onClick={placeOrder}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold transition"
        >
          Place Order
        </button>
      </motion.div>
    </div>
  );
}
