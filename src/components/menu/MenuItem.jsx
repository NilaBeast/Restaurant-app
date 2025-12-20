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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
    >
      {/* 🖼️ Image */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />

        {/* Price badge */}
        <span className="absolute top-3 right-3 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow">
          ₹{item.price}
        </span>
      </div>

      {/* 📄 Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">
          {item.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Freshly prepared & delicious 😋
        </p>

        <button
          onClick={handleAdd}
          className="mt-auto bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition font-medium"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
