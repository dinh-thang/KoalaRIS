import React from 'react';
import { pageRoutes } from '../constants/pageRoutes.js';
import CartItem from './CartItem';
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {

  const navigate = useNavigate();
  
  const navigateToCheckOut = () => {
    navigate(pageRoutes.CHECKOUT);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="w-full lg:w-1/3 bg-gray-900 text-white p-6 rounded-lg shadow-md lg:ml-4 mt-4 lg:mt-0 fixed top-0 left-0 lg:static right-0 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}</h2>
      <div className="overflow-y-auto flex-1">
        <ul>
          {cartItems.map((item, index) => (
            <CartItem 
              item={item} 
              onRemove={() => removeFromCart(index, item)}
            />
          ))}
        </ul>
      </div>
      <div className="border-t border-gray-700 pt-4 mt-4">
        <h3 className="text-lg font-semibold">Total: ${totalAmount}</h3>
        <button className="bg-yellow hover:bg-yellow text-black px-4 py-2 rounded mt-2" onClick={navigateToCheckOut}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
