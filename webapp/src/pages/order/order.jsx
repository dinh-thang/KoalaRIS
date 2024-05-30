import MenuItem from '../../components/MenuItem.jsx';
import { React, useState } from "react";
import bibimbap from "../../images/bibimbap.jpg";
import Cart from "../../components/Cart.jsx";

const Order = () => {

    // Replace this with DB
    const menuItems = [
        { name: "Bibimbap", price: "$16.8", image: bibimbap },
        { name: "Bibimbap", price: "$16.8", image: bibimbap },
        { name: "Bibimbap", price: "$16.8", image: bibimbap },
        { name: "Bibimbap", price: "$16.8", image: bibimbap },
        { name: "Bibimbap", price: "$16.8", image: bibimbap },
        { name: "Bibimbap", price: "$16.8", image: bibimbap },
      ];

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (menuItem) => {
        setCartItems([...cartItems, menuItem]);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    return (     
            <div className="bg-white p-8">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-red-600">Dine In Menu</h1>
                <div className="bg-red-600 text-white py-2 px-4 rounded">
                  Table 5
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Enjoy our various selections from different cuisines.
              </p>

            {/* Replace Menu Items array with db */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.map((item) => (<MenuItem {...item} />))}
            </div>
            
            {cartItems.length > 0 && (
            <Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
            />
      )}

    </div>
    );
};

export default Order;