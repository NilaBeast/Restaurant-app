import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1
          onClick={() => navigate("/home")}
          className="text-2xl font-bold cursor-pointer"
        >
          🍽️ Foodies Hub
        </h1>

        {/* Profile Avatar */}
        <div className="relative">
          <img
            src={
              user.profileImage
                ? `${import.meta.env.VITE_API_URL}${user.profileImage}`
                : "https://i.imgur.com/HeIi0wU.png"
            }
            alt="Profile"
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full object-cover border cursor-pointer hover:scale-105 transition"
          />

          {/* Dropdown */}
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/profile");
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                My Profile
              </button>

              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
