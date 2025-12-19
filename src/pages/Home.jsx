import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-16 text-center"
    >
      <h1 className="text-5xl font-extrabold mb-6">
        🍽️ Foodies Hub
      </h1>
      <p className="text-gray-600 text-lg">
        Delicious food. Fast delivery. Great taste.
      </p>
    </motion.div>
  );
}
