import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProfile, updateProfile } from "../services/profileService";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { updateUser } = useAuth();
  const [form, setForm] = useState({
    username: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    profileImage: null,
  });

  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();

        setForm({
          username: data.username || "",
          phone: data.phone || "",
          street: data.address?.street || "",
          city: data.address?.city || "",
          state: data.address?.state || "",
          pincode: data.address?.pincode || "",
          profileImage: null,
        });

        setPreview(data.profileImage);
      } catch (error) {
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setForm({ ...form, profileImage: file });
    setPreview(URL.createObjectURL(file));
  };

  const saveProfile = async () => {
  try {
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    const updatedUser = await updateProfile(formData);

    updateUser(updatedUser); // 🔥 sync navbar + storage
    setPreview(updatedUser.profileImage);

    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error("Failed to update profile");
  }
};

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center py-20 px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10"
      >
        {/* Header */}
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">
          My Profile
        </h2>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <img
                src={preview || "https://i.imgur.com/HeIi0wU.png"}
                className="w-32 h-32 rounded-full object-cover border"
              />

            <label className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full cursor-pointer hover:bg-green-700 transition">
              ✎
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </motion.div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "username", label: "Username" },
            { name: "phone", label: "Phone Number" },
            { name: "street", label: "Street" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
            { name: "pincode", label: "Pincode" },
          ].map((field) => (
            <motion.input
              key={field.name}
              whileFocus={{ scale: 1.02 }}
              name={field.name}
              placeholder={field.label}
              value={form[field.name]}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />
          ))}
        </div>

        {/* Save Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={saveProfile}
          className="mt-12 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition"
        >
          Save Changes
        </motion.button>
      </motion.div>
    </div>
  );
}
