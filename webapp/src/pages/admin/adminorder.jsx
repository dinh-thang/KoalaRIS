import dinein from '../../images/dinein.png';
import './admin.css';
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../constants/pageRoutes.js";
import AdminOrderItem from '../../components/AdminOrderItem.jsx';
import { useState, useRef } from 'react';

const AdminOrder = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const sidebarRef = useRef(null);
    const backdropRef = useRef(null);

    const orderItems = [
        { order_no: 1904010, order_time: "11:09 29/03/2023", customer_name: "Quang Thang", phone_no: 4123045678, email: "abcxyz@gmail.com", method: "Take Away", table_no: 5, meal_no: 1, meal: [{ item_name: "fries", item_qty: 2, price: 29  },], bill: "$23" },
        { order_no: 1904011, order_time: "11:09 29/03/2023", customer_name: "Lachlan Vu", phone_no: 4123045678, email: "abcxyz@gmail.com", method: "Dine In", table_no: 2, meal_no: 1, meal: [{ item_name: "fries", item_qty: 2, price: 29  },], bill: "$45" },
        { order_no: 1904012, order_time: "11:09 29/03/2023", customer_name: "Dat Le", phone_no: 4123045678, email: "abcxyz@gmail.com", method: "Delivery", table_no: 12, meal_no: 1, meal: [{ item_name: "fries", item_qty: 2, price: 29  },], bill: "$67" },
    ];

    const navigate = useNavigate();

    const navigateToAdmin = () => {
      navigate(pageRoutes.ADMIN);
    };
    const navigateToAdminOrder = () => {
        navigate(pageRoutes.ADMIN_ORDER);
    };
    const navigateToAdminReservation = () => {
        navigate(pageRoutes.ADMIN_RESERVATION);
    };

    // Open the sidebar and show the backdrop
    function openSidebar(order) {
        setSelectedOrder(order);
        setTimeout(() => {
            const sidebar = sidebarRef.current;
            const backdrop = backdropRef.current;
            if (sidebar && backdrop) {

                sidebar.style.transform = 'translateX(0)'; // Slide in
                sidebar.style.display = 'block'; // Make sidebar visible
                backdrop.style.display = 'block'; // Show backdrop

            }
        }, 0);
    }

    // Close the sidebar and hide the backdrop
    function closeSidebar() {
        setSelectedOrder(null);
        const sidebar = sidebarRef.current;
        const backdrop = backdropRef.current;
        if (sidebar && backdrop) {
            
            sidebar.style.transform = 'translateX(100%)'; // Slide out
            sidebar.style.display = 'none';
            backdrop.style.display = 'none';
            
        }
    }

    return (
        <div class="flex min-h-screen">
            {/* Sidebar */}
            <div class="w-32 bg-white shadow-lg flex flex-col justify-between">
                <div class="p-5">
                    <button class="p-2 my-2 w-full bg-gray-200 rounded text-left hover:bg-gray-300" onClick={navigateToAdmin}>
                        <img src={dinein} alt="Home" class="w-6 h-6 text-white"></img>
                    </button>
                    <button class="p-2 my-2 w-full bg-blue-500 text-white rounded text-left hover:bg-blue-600" onClick={navigateToAdminOrder}>
                        <img src={dinein} alt="Home" class="w-6 h-6 text-white"></img>    
                    </button> 
                    <button class="p-2 my-2 w-full bg-gray-200 rounded text-left hover:bg-gray-300" onClick={navigateToAdminReservation}>
                        <img src={dinein} alt="Home" class="w-6 h-6 text-white"></img>
                    </button>
                </div>
                <div class="p-5">
                    <button class="p-2 w-full bg-gray-200 rounded text-left hover:bg-gray-300">
                        <img src={dinein} alt="Home" class="w-6 h-6 text-white"></img>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div class="flex-1 p-8">
                <h1 class="font-bold text-3xl mb-6">Order</h1>

                {/* Orders Table */}
                <div class="bg-white p-5 shadow rounded">
                    <table class="w-full text-left">
                        <thead class="text-gray-700">
                            <tr>
                                <th class="px-4 py-2">Order No.</th>
                                <th class="px-4 py-2">Customer Name</th>
                                <th class="px-4 py-2">Method</th>
                                <th class="px-4 py-2">Table No.</th>
                                <th class="px-4 py-2">Meals No.</th>
                                <th class="px-4 py-2">Bill</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600">
                            {orderItems.map(item => (
                                <AdminOrderItem key={item.order_no} {...item} onClick={() => openSidebar(item)} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detail Sidebar (Initially hidden) */}
            {selectedOrder && (
                <div id="detailSidebar" ref={sidebarRef} class="w-96 bg-white p-8 shadow-lg fixed right-0 top-0 h-full z-50">
                    <div class="flex justify-between items-center">
                        <h2 class="font-bold text-xl">Order</h2>
                        <button onClick={closeSidebar}>X</button>
                    </div>
                    <h2 class="font-bold text-xl mb-6">{selectedOrder.order_no}</h2>
                    <div>
                        <h3 class="font-bold mb-5">Customer Detail</h3>
                        <p>Customer: {selectedOrder.customer_name}</p>
                        <p>Table: {selectedOrder.table_no}</p>
                        <p class="mb-5">Order time: {selectedOrder.order_time}</p>
                        <p>Phone Number: {selectedOrder.phone_no}</p>
                        <p>Email: {selectedOrder.email}</p>
                    </div>
                    <div class="mt-4">
                        <h3 class="font-bold mb-5">Meals</h3>
                        <ul>
                            {selectedOrder.meal.map((meal) => (
                                <li>{meal.item_qty} x {meal.item_name}: {meal.price}</li>
                            ))}
                        </ul>
                        <hr class="mt-5 mb-5"></hr>
                        <p class="font-bold">Order Total: {selectedOrder.bill}</p>
                    </div>
                </div>
            )}

            <div id="backdrop" ref={backdropRef} class="backdrop" onClick={closeSidebar}></div>
        </div>
    )
}

export default AdminOrder;
