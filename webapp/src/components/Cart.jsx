import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="w-full lg:w-1/3 bg-gray-900 text-white p-4 rounded-lg lg:ml-4 mt-4 lg:mt-0 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}</h2>
      <ul>
        {cartItems.map((item, index) => (
          <CartItem 
            key={index} 
            item={item} 
            onRemove={() => removeFromCart(index)} 
          />
        ))}
      </ul>
      <div className="border-t border-gray-700 pt-4 mt-4">
        <h3 className="text-lg font-semibold">Total: ${totalAmount}</h3>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded mt-2">Order</button>
      </div>
    </div>
  );
};

export default Cart;
