import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-red-900 to-black-900"
      >
    <footer className=" text-white text-center p-4 mt-5">
      <p>© 2025 Foodies Hub</p>
    </footer>
    </motion.div>
  );
}
