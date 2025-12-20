import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-red-900 to-black-900 px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50 backdrop-blur-md"
    >
      {user && (
        <>

        <ul className="flex gap-6 text-white">
        <NavItem to="/home" nav="Home" />
        <NavItem to="/menu" nav="Menu" />
        <NavItem to="/cart" nav={`Cart (${totalQty})`} />
        <NavItem to="/orders" nav="Orders" />
        <NavItem to="/checkout" nav="Checkout" />
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
        </>
      )}
    </motion.nav>
  );
}
