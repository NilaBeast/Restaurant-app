import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  if (!user) return null;

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-violet-900 to-indigo-900 px-6 py-4 flex justify-between items-center shadow-lg"
    >
      <ul className="flex gap-6 text-white">
        <NavItem to="/home" nav="Home" />
        <NavItem to="/menu" nav="Menu" />
        <NavItem to="/cart" nav={`Cart (${totalQty})`} />
      </ul>

      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white transition"
      >
        Logout
      </button>
    </motion.nav>
  );
}
