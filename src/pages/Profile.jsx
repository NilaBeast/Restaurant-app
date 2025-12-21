import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/profileService";
import toast from "react-hot-toast";

export default function Profile() {
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
        console.error("PROFILE ERROR:", error);
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
    setPreview(URL.createObjectURL(file)); // image preview
  };

  const saveProfile = async () => {
    try {
      const formData = new FormData();

      formData.append("username", form.username);
      formData.append("phone", form.phone);
      formData.append("street", form.street);
      formData.append("city", form.city);
      formData.append("state", form.state);
      formData.append("pincode", form.pincode);

      if (form.profileImage) {
        formData.append("profileImage", form.profileImage);
      }

      await updateProfile(formData);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">My Profile</h2>

      {/* Profile Image */}
      <div className="flex items-center gap-6 mb-8">
        <img
  src={
    preview?.startsWith("blob")
      ? preview
      : preview
        ? `${import.meta.env.VITE_API_URL}${preview}`
        : "https://i.imgur.com/HeIi0wU.png"
  }
  alt="Profile"
  className="w-28 h-28 rounded-full object-cover border"
/>


        <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Change Photo
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="username"
          placeholder="Username"
          className="border p-2 rounded"
          value={form.username}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone number"
          className="border p-2 rounded"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      {/* Address */}
      <h3 className="text-xl font-semibold mt-8 mb-3">
        Address
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="street"
          placeholder="Street"
          className="border p-2 rounded"
          value={form.street}
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          className="border p-2 rounded"
          value={form.city}
          onChange={handleChange}
        />

        <input
          name="state"
          placeholder="State"
          className="border p-2 rounded"
          value={form.state}
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          className="border p-2 rounded"
          value={form.pincode}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={saveProfile}
        className="mt-8 bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
}
