import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <li className="flex justify-between items-center bg-white p-3 rounded mb-4">
      <div className="flex items-center">
        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded mr-4"/>
        <div className="text-dark-blue">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={onRemove}
        className=" text-dark-blue px-2 py-1 text-5xl rounded"
      > 
        &times;
      </button>
    </li>
  );
};

export default CartItem;