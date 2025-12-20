import MenuList from "../components/menu/MenuList";
import { motion } from "framer-motion";
import bgImage from "../assets/hero/Heroimage.jpeg";

export default function Menu() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/70 min-h-screen p-10 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          🍽️ Our Menu
        </motion.h2>

        <MenuList />
      </div>
    </div>
  );
}
