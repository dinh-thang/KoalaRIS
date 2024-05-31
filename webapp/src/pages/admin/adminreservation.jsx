import dinein from '../../images/dinein.png';
import './admin.css';
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../constants/pageRoutes.js";
import AdminReservationItem from '../../components/AdminReservationItem.jsx';
import { useState, useRef } from 'react';

const AdminReservation = () => {
    const [selectedReservation, setSelectedReservation] = useState(null);
    const sidebarRef = useRef(null);
    const backdropRef = useRef(null);

    const reservationItem = [
        { reservation_no: 1904010, customer_name: "Quang Thang", phone_no: 4526182912, email: "abcxyz69@gmail.com",  guest_qty: 69, book_time: "11:09 30/04/2024", time: "02:00PM", date: "31/05/2024", status: "Arrived" },
        { reservation_no: 1904341, customer_name: "Quang Thang Dinh", phone_no: 8626182912, email: "abcxyz69@gmail.com",  guest_qty: 96, book_time: "11:09 30/04/2024", time: "02:00PM", date: "31/05/2024", status: "Arrived" },
        { reservation_no: 9104010, customer_name: "Scott Maguire", phone_no: 4526182969, email: "abcxyz69@gmail.com",  guest_qty: 6, book_time: "11:09 30/04/2024", time: "02:00PM", date: "31/05/2024", status: "Arrived" },

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

    function openSidebar(reservation) {
        setSelectedReservation(reservation);
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

    // Function to close the sidebar and hide the backdrop
    function closeSidebar() {
        setSelectedReservation(null);
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
                            {reservationItem.map(r => (
                                <AdminReservationItem key={r.reservation_no} {...r} onClick={() => openSidebar(r)} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detailed Sidebar */}
            {selectedReservation && (
                <div id="detailSidebar" ref={sidebarRef} class="w-96 bg-white p-8 shadow-lg fixed right-0 top-0 h-full z-50">
                    <div class="flex justify-between items-center">
                        <h2 class="font-bold text-xl">Reserve</h2>
                        <button onClick={closeSidebar}>X</button>
                    </div>
                    <h2 class="font-bold text-xl mb-6">{selectedReservation.reservation_no}</h2>
                    <div>
                        <h3 class="font-bold mb-4">Customer Detail</h3>
                        <p>Customer: {selectedReservation.customer_name}</p>
                        <p class="mb-5">Booking time: {selectedReservation.book_time}</p>
                        <p>Phone Number: {selectedReservation.phone_no}</p>
                        <p>Email: {selectedReservation.email}</p>
                    </div>
                    <div class="mt-4">
                        <h3 class="font-bold mb-4">Booking Detail</h3>
                        <p>Size: {selectedReservation.guest_qty}</p>
                        <p>Time: {selectedReservation.time}</p>
                        <p>Date: {selectedReservation.date}</p>
                        <div class="mt-10">
                            <button class="bg-red hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full">Check-in</button>
                            <button class="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded w-full">Cancel Booking</button>
                        </div>
                    </div>
                </div>
            )}
            

            <div id="backdrop" ref={backdropRef} class="backdrop" onClick={closeSidebar}></div>
        </div>
    )
}

export default AdminReservation;