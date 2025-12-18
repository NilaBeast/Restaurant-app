import NavItem from "./NavItem";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null; // 🔥 hide navbar if not logged in

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-violet-900 p-4 flex justify-around items-center gap-6">
      <ul className="flex gap-5">
      <NavItem to="/home" nav="Home" />
      <NavItem to="/menu" nav="Menu" />
      <NavItem to="/cart" nav="Cart" />

      </ul>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-3 py-1 rounded text-white"
      >
        Logout
      </button>
    </nav>
  );
}
