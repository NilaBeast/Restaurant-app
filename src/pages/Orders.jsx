import { useEffect, useState } from "react";
import { getMyOrders } from "../services/orderService";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch (error) {
        alert("Failed to load orders");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">My Orders</h2>

      {orders.length === 0 && (
        <p className="text-gray-500">No orders found</p>
      )}

      {orders.map((order) => (
        <div
          key={order._id}
          className="border rounded-lg p-5 mb-6 shadow"
        >
          <p className="font-semibold">
            Order ID: {order._id}
          </p>

          <p className="text-sm text-gray-500">
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
        </div>
      ))}
    </div>
  );
}
