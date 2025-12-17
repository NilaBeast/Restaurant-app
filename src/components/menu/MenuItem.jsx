import {useCart} from "../../context/CartContext"
import React from "react"

export default function MenuItem({ item }) {
    const { addToCart } = useCart();

    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    )
}
