import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CartSummary() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 p-6 rounded-3xl
                 bg-white/10 backdrop-blur-xl border border-white/20
                 shadow-xl text-white"
    >
      {/* Price Breakdown */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg text-gray-300">Subtotal</span>
        <span className="text-lg font-semibold">₹{total}</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-lg text-gray-300">Delivery</span>
        <span className="text-green-400 font-semibold">FREE</span>
      </div>

      <div className="flex justify-between items-center text-xl font-bold mb-6">
        <span>Total</span>
        <span className="text-green-400">₹{total}</span>
      </div>

      {/* Checkout Button */}
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link
          to="/checkout"
          className="block text-center bg-indigo-600 hover:bg-indigo-700
                     py-3 rounded-2xl font-semibold shadow-lg transition"
        >
          Proceed to Checkout →
        </Link>
      </motion.div>
    </motion.div>
  );
}
