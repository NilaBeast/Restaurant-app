import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border p-4 rounded mb-3">
      <h4 className="font-semibold">{item.name}</h4>
      <p>₹{item.price}</p>
      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}
