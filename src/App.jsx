import { useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  // Pages where navbar/footer should be hidden
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Show Navbar only when logged in and not on auth pages */}
      {user && !hideLayout && <Navbar />}

      <main className="flex-grow">
        <AppRoutes />
      </main>

      {/* Show Footer only when logged in and not on auth pages */}
      {user && !hideLayout && <Footer />}
    </div>
  );
}
