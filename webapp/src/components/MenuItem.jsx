import React from 'react';

export default function MenuItem({ item, onAddToCart }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="text-gray-700">${item.price.toFixed(2)}</p>
        <button
          className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={() => onAddToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}