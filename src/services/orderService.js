import api from "../utils/api";

// Create new order
export const createOrder = async (items, totalPrice) => {
  const { data } = await api.post("/order", {
    items,
    totalPrice,
  });
  return data;
};

// Get logged-in user's orders
export const getMyOrders = async () => {
  const { data } = await api.get("/order/my");
  return data;
};
