import { useEffect, useState } from "react";
import { getMyOrders } from "../services/orderService";
import { motion } from "framer-motion";
import bgImage from "../assets/hero/Heroimage.jpeg";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch {
        alert("Failed to load orders");
      }
    };
    fetchOrders();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/70 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">
          📦 My Orders
        </h2>

        {orders.length === 0 && (
          <p className="text-gray-300 text-center">
            No orders found
          </p>
        )}

        {orders.map((order) => (
          <motion.div
            key={order._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-white/20 rounded-xl p-5 mb-6"
          >
            <p className="font-semibold">
              Order ID: {order._id}
            </p>

            <p className="text-sm text-gray-300">
              Status: {order.status}
            </p>

            <div className="mt-3">
              {order.items.map((item, idx) => (
                <p key={idx}>
                  {item.name} × {item.qty} — ₹
                  {item.price * item.qty}
                </p>
              ))}
            </div>

            <p className="mt-3 font-bold">
              Total: ₹{order.totalPrice}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
