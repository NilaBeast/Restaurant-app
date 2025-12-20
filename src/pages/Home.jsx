import { motion } from "framer-motion";
import bgImage from "../assets/hero/Heroimage.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            🍽️ Foodies Hub
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-200">
            Delicious food • Fast delivery • Great taste
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link
              to="/menu"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition"
            >
              Explore Menu
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
