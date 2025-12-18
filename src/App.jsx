import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}
