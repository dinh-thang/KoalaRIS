import MenuItem from '../../components/MenuItem.jsx';
import { React, useState, useEffect } from "react";
import Cart from "../../components/Cart.jsx";
import { apiRoutes } from "../../constants/apiRoutes.js";

const Order = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
      // fetch("http://localhost:5000/item/get-all-items")
      //   .then(res => res.json())
      //   .then(data => {
      //     console.log(data);
      //     setMenuItems(data);
      //   } catch (error) {
      //     console.error('Error fetching data:', error);
      //   }
      // }
      
      // get();
    }, []);

    const [cartItems, setCartItems] = useState([]);

    const [cartId, setCartId] = useState(null);

    const initializeCart = async () => {
      try {
        const response = await fetch(apiRoutes.HTTP + apiRoutes.CART_INIT);
    
        if (!response.ok) {
          throw new Error(`Failed to initialize cart: ${response.status} ${response.statusText}`);
        }
    
        const data = await response.json();
        if (!data || !data) {
          throw new Error('Invalid cart initialization response');
        }
        console.log('Cart initialized:', data);
        setCartId(data);
      } catch (error) {
        console.error('Error initializing cart:', error);
      }
    };
    const addToCart = (menuItem) => {
      setCartItems([...cartItems, menuItem]);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };
    const isCartVisible = cartItems.length > 0;

  return (
    <div className={`flex flex-col lg:flex-row bg-gray-100 max-h-screen ${isCartVisible ? 'lg:justify-start' : 'lg:justify-center'}`}>
      <div className={`w-full ${isCartVisible ? 'lg:w-2/3' : 'lg:w-full'} mb-6 p-6 lg:mb-0`}>
        <h1 className="text-4xl font-bold mb-6 text-red">Dine In Menu</h1>
        <p className="mb-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="overflow-y-auto max-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
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