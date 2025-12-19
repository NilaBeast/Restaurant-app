import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-3"
    >
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-gray-500">₹{item.price} × {item.qty}</p>
        <p className="font-bold">₹{item.price * item.qty}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >−</button>

        <span className="font-bold">{item.qty}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >+</button>
      </div>
    </motion.div>
  );
}
