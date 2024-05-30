import dinein from '../../images/dinein.png';
import './admin.css';
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../constants/pageRoutes.js";
import AdminOrderItem from '../../components/AdminOrderItem.jsx';

const AdminOrder = () => {

    const orderItems = [
        { order_no: 1904010, customer_name: "Quang Thang", method: "Take Away", table_no: 5, meal_no: 1, bill: "$23" },
        { order_no: 1904010, customer_name: "Quang Thang", method: "Take Away", table_no: 5, meal_no: 1, bill: "$23" },
        { order_no: 1904010, customer_name: "Quang Thang", method: "Take Away", table_no: 5, meal_no: 1, bill: "$23" },

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
    function openSidebar() {
        const sidebar = document.getElementById('detailSidebar');
        const backdrop = document.getElementById('backdrop');
        sidebar.style.transform = 'translateX(0)'; // Slide in
        setTimeout(() => {
            sidebar.style.display = 'block'; // Make sidebar visible
            backdrop.style.display = 'block'; // Show backdrop
        }, 300); // Delay to allow slide in to complete
    }

    // Close the sidebar and hide the backdrop
    function closeSidebar() {
        const sidebar = document.getElementById('detailSidebar');
        const backdrop = document.getElementById('backdrop');
        sidebar.style.transform = 'translateX(100%)'; // Slide out
        setTimeout(() => {
            sidebar.style.display = 'none';
            backdrop.style.display = 'none';
        }, 300); // Delay to allow slide out to complete
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
                            {orderItems.map(item => (<AdminOrderItem {...item} onClick={openSidebar}/>) )}
                        </tbody>
                    </table>
                </div>
            </div>


            {/* Detail Sidebar (Initially hidden) */}
            <div id="detailSidebar" class="w-96 bg-white p-8 shadow-lg fixed right-0 top-0 h-full z-50">
                <div class="flex justify-between items-center">
                    <h2 class="font-bold text-xl">Order</h2>
                    <button onClick={closeSidebar}>X</button>
                </div>
                <h2 class="font-bold text-xl mb-6">3004019</h2>
                <div>
                    <h3 class="font-bold mb-5">Customer Detail</h3>
                    <p>Customer: Quang Thang</p>
                    <p>Table: 09</p>
                    <p class="mb-5">Order time: 11:09 30/04/2024</p>
                    <p>Phone Number: 0412345678</p>
                    <p>Email: abc@gmail.com</p>
                </div>
                <div class="mt-4">
                    <h3 class="font-bold mb-5">Meals</h3>
                    <p>1x Bibimbap: $29</p>
                    <p>1x Fries: $38</p>
                    <p>1x Hamburger: $10</p>
                    <hr class="mt-5 mb-5"></hr>
                    <p class="font-bold">Order Total: $100</p>
                </div>
            </div>

            <div id="backdrop" class="backdrop" onClick={closeSidebar}></div>
        </div>
    )
}

export default AdminOrder;