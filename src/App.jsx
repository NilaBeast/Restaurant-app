import { useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const { loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  // Pages where navbar/footer should be hidden
  const hideLayoutRoutes = ["/", "/login", "/register"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <main className="flex-grow pt-4">
        <AppRoutes />
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}
