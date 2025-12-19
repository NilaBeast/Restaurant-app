import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

export default function MenuItem({ item }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-gray-600 mt-1">₹{item.price}</p>
      </div>

      <button
        onClick={handleAdd}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}
