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
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
    >
      {/* 🖼️ Image Glass Container */}
      <div className="relative h-44 flex items-center justify-center bg-gradient-to-br from-white/20 to-white/5">
        <motion.img
          src={item.image}
          alt={item.name}
          whileHover={{ scale: 1.15, rotate: 1 }}
          transition={{ duration: 0.4 }}
          className="h-36 object-contain drop-shadow-2xl"
        />

        {/* Price Badge */}
        <span className="absolute top-4 right-4 bg-green-600/90 backdrop-blur-md text-white text-sm px-4 py-1 rounded-full shadow-lg">
          ₹{item.price}
        </span>
      </div>

      {/* 📄 Content */}
      <div className="relative p-5 text-white">
        <h3 className="text-lg font-semibold tracking-wide">
          {item.name}
        </h3>

        <p className="text-sm text-gray-300 mt-1">
          Crafted fresh with premium ingredients
        </p>

        {/* Action */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAdd}
          className="mt-5 w-full bg-green-600 hover:bg-green-700 py-2.5 rounded-xl font-medium transition shadow-lg"
        >
          Add to Cart
        </motion.button>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent" />
      </div>
    </motion.div>
  );
}
