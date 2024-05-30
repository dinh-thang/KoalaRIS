import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded mr-4"/>
        <div>
          <h3 className="text-lg">{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        &times;
      </button>
    </li>
  );
};

export default CartItem;