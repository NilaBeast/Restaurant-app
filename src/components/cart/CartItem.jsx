import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center rounded-2xl p-5 mb-4
                 bg-white/10 backdrop-blur-xl border border-white/20
                 shadow-lg hover:shadow-2xl transition"
    >
      {/* Item Info */}
      <div className="text-white">
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-300 mt-1">
          ₹{item.price} × {item.qty}
        </p>
        <p className="mt-1 font-bold text-green-400">
          ₹{item.price * item.qty}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => decreaseQty(item.id)}
          className="w-9 h-9 rounded-full bg-red-500/80 hover:bg-red-600
                     text-white font-bold flex items-center justify-center"
        >
          −
        </motion.button>

        <motion.span
          key={item.qty}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-lg font-bold text-white"
        >
          {item.qty}
        </motion.span>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => increaseQty(item.id)}
          className="w-9 h-9 rounded-full bg-green-500/80 hover:bg-green-600
                     text-white font-bold flex items-center justify-center"
        >
          +
        </motion.button>
      </div>
    </motion.div>
  );
}
