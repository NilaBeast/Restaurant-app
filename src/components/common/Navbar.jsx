import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `block px-4 py-2 rounded text-lg ${
          isActive
            ? "bg-red-600 text-white"
            : "text-gray-800 hover:bg-gray-200"
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <>
      {/* 🔥 DESKTOP NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-700 to-red-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Foodies Hub</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center text-white">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/cart" className="flex items-center gap-1">
              <ShoppingCart size={18} /> ({totalQty})
            </NavLink>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* 🔥 MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Foodies Hub</h2>
                <button onClick={() => setOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                <NavItem to="/home" label="Home" />
                <NavItem to="/menu" label="Menu" />
                <NavItem to="/orders" label="Orders" />
                <NavItem
                  to="/cart"
                  label={`Cart (${totalQty})`}
                />
              </nav>

              <button
                onClick={handleLogout}
                className="mt-auto bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
