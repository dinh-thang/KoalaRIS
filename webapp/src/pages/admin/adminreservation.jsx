import dinein from '../../images/dinein.png';
import './admin.css';
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../constants/pageRoutes.js";

const AdminReservation = () => {
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

    function openSidebar() {
        const sidebar = document.getElementById('detailSidebar');
        const backdrop = document.getElementById('backdrop');
        sidebar.style.display = 'block'; // Make sidebar visible
        sidebar.style.transform = 'translateX(0)'; // Slide in
        backdrop.style.display = 'block'; // Show backdrop
    }

    // Function to close the sidebar and hide the backdrop
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
                    <button class="p-2 my-2 w-full bg-gray-200 rounded text-left hover:bg-gray-300" onClick={navigateToAdminOrder}>
                        <img src={dinein} alt="Home" class="w-6 h-6 text-white"></img>
                    </button>
                    <button class="p-2 my-2 w-full bg-blue-500 text-white rounded text-left hover:bg-blue-600" onClick={navigateToAdminReservation}>
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
                <h1 class="font-bold text-3xl mb-6">Reservation</h1>

                {/* Reservation Table */}
                <div class="bg-white p-5 shadow rounded">
                    <table class="w-full text-left">
                        <thead class="text-gray-700">
                            <tr>
                                <th class="px-4 py-2">No.</th>
                                <th class="px-4 py-2">Customer Name</th>
                                <th class="px-4 py-2">No of Guests</th>
                                <th class="px-4 py-2">Time</th>
                                <th class="px-4 py-2">Date</th>
                                <th class="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600">
                            <tr onClick={openSidebar} class="cursor-pointer">
                                <td class="px-4 py-3">1904010</td>
                                <td class="px-4 py-3">Quang Thang</td>
                                <td class="px-4 py-3">69</td>
                                <td class="px-4 py-3">02:00PM</td>
                                <td class="px-4 py-3">31/05/2024</td>
                                <td class="px-4 py-3"><span class="px-10 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-white">Arrived</span></td>
                            </tr>
                            <tr onClick={openSidebar} class="cursor-pointer">
                                <td class="px-4 py-3">1904043</td>
                                <td class="px-4 py-3">Quang Thang</td>
                                <td class="px-4 py-3">6</td>
                                <td class="px-4 py-3">03:00PM</td>
                                <td class="px-4 py-3">31/05/2024</td>
                                <td class="px-4 py-3"><span class="px-12 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-300 text-white">Late</span></td>
                            </tr>
                            <tr onClick={openSidebar} class="cursor-pointer">
                                <td class="px-4 py-3">1904069</td>
                                <td class="px-4 py-3">Quang Thang</td>
                                <td class="px-4 py-3">9</td>
                                <td class="px-4 py-3">02:00PM</td>
                                <td class="px-4 py-3">31/05/2024</td>
                                <td class="px-4 py-3"><span class="px-9 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white">Cancelled</span></td>
                            </tr>
                            <tr onClick={openSidebar} class="cursor-pointer">
                                <td class="px-4 py-3">1904010</td>
                                <td class="px-4 py-3">Quang Thang</td>
                                <td class="px-4 py-3">69</td>
                                <td class="px-4 py-3">02:00PM</td>
                                <td class="px-4 py-3">31/05/2024</td>
                                <td class="px-4 py-3"><span class="px-10 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-300 text-white">Pending</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detailed Sidebar */}
            <div id="detailSidebar" class="w-96 bg-white p-8 shadow-lg fixed right-0 top-0 h-full z-50">
                <div class="flex justify-between items-center">
                    <h2 class="font-bold text-xl">Reserve</h2>
                    <button onClick={closeSidebar}>X</button>
                </div>
                <h2 class="font-bold text-xl mb-6">3004019</h2>
                <div>
                    <h3 class="font-bold mb-4">Customer Detail</h3>
                    <p>Customer: Quang Thang</p>
                    <p class="mb-5">Booking time: 11:09 30/04/2024</p>
                    <p>Phone Number: 0412345678</p>
                    <p>Email: abc@gmail.com</p>
                </div>
                <div class="mt-4">
                    <h3 class="font-bold mb-4">Booking Detail</h3>
                    <p>Size: 5</p>
                    <p>Time: 17:00</p>
                    <p>Date: 30/04/2024</p>
                    <div class="mt-10">
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">Check-in</button>
                        <button class="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded w-full">Cancel Booking</button>
                    </div>
                </div>
            </div>

            <div id="backdrop" class="backdrop" onClick={closeSidebar}></div>
        </div>
    )
}

export default AdminReservation;