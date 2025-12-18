import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(
      formData.username,
      formData.email,
      formData.password
    );
    if (success) navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input name="username" placeholder="Username" className="w-full p-2 border mb-3" onChange={handleChange} />
        <input name="email" placeholder="Email" className="w-full p-2 border mb-3" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 border mb-3" onChange={handleChange} />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Register
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
