import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty } = useCart();

  return (
    <div className="flex justify-between items-center border p-4 rounded mb-3">
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p>₹{item.price} × {item.qty}</p>
        <p className="font-bold">₹{item.price * item.qty}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          −
        </button>

        <span className="font-bold">{item.qty}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
