import api from "../utils/api";

export const getProfile = async () => {
  const { data } = await api.get("/api/profile");
  return data;
};


export const updateProfile = async (formData) => {
  const { data } = await api.put("/api/profile", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

