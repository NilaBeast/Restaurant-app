import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Restore auth on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // 🔐 LOGIN
   const login = async (email, password) => {
  try {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    const { user, token } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);

    return true; // ✅ only on success
  } catch (error) {
    alert(error.response?.data?.message || "Invalid email or password");
    return false; // ✅ IMPORTANT
  }
};

  // 📝 REGISTER
  const register = async (username, email, password) => {
  try {
    const res = await api.post("/auth/register", {
      username,
      email,
      password,
    });

    const { user, token } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
    return true; // ✅ same as login
  } catch (error) {
    alert(error.response?.data?.message || "Registration failed");
    return false; // ✅ same as login
  }
};


  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
