import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { motion } from "framer-motion";
import bgImage from "../assets/hero/Heroimage.jpeg";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/70 backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          🛒 Your Cart
        </motion.h2>

        {cart.length === 0 && (
          <p className="text-gray-300 text-center">Your cart is empty</p>
        )}

        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length > 0 && <CartSummary />}
      </div>
    </div>
  );
}
