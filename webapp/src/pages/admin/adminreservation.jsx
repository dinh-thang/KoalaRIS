import './admin.css';
import AdminSideBar from "../../components/adminSideBar.jsx";
import AdminReservationItem from '../../components/AdminReservationItem.jsx';
import {useState, useRef, useEffect} from 'react';
import apiRoutes from "../../constants/apiRoutes";
import Cookies from "js-cookies";

const AdminReservation = () => {
    const [selectedReservation, setSelectedReservation] = useState(null);
    const sidebarRef = useRef(null);
    const backdropRef = useRef(null);
    const [tableData, setTableData] = useState([]);


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

    useEffect(() => {
        fetchBookings().then();
    }, []);

    const fetchBookings = async () => {
        await fetch(`${apiRoutes.HTTP}${apiRoutes.ADMIN_GET_ALL_BOOKINGS}?accountId=${Cookies.getItem("accountId")}`)
            .then(res => res.json())
            .then(data => {
                setTableData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <AdminSideBar />

            {/* Main Content */}
            <div className="flex-1 p-8">
                <h1 className="font-bold text-3xl mb-6">Reservation</h1>

                {/* Reservation Table */}
                <div className="bg-white p-5 shadow rounded">
                    <table className="w-full text-left">
                        <thead className="text-gray-700">
                            <tr>
                                <th className="px-4 py-2">No.</th>
                                <th className="px-4 py-2">Customer Name</th>
                                <th className="px-4 py-2">No of Guests</th>
                                <th className="px-4 py-2">Time</th>
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {tableData.map(r => (
                                <AdminReservationItem
                                    reservation_no={r.id}
                                    customer_name={r.account.name}
                                    guest_qty={r.reserveQuantity}
                                    time={r.reserveTime}
                                    status={"Confirmed"}
                                    onClick={() => openSidebar(r)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detailed Sidebar */}
            {selectedReservation && (
                <div id="detailSidebar" ref={sidebarRef} className="w-96 bg-white p-8 shadow-lg fixed right-0 top-0 h-full z-50">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-xl">Reserve</h2>
                        <button onClick={closeSidebar}>X</button>
                    </div>
                    <h2 className="font-bold text-xl mb-6">{selectedReservation.reservation_no}</h2>
                    <div>
                        <h3 className="font-bold mb-4">Customer Detail</h3>
                        <p>Customer: {selectedReservation.account.name}</p>
                        <p className="mb-5">Booking time: {selectedReservation.reserveTime}</p>
                        <p>Phone Number: {selectedReservation.account.phoneNumber}</p>
                        <p>Email: {selectedReservation.account.email}</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold mb-4">Booking Detail</h3>
                        <p>Size: {selectedReservation.reserveQuantity}</p>
                        <p>Time: {selectedReservation.reserveTime}</p>
                        <div className="mt-10">
                            <button className="bg-red hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full">Check-in</button>
                            <button className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded w-full">Cancel Booking</button>
                        </div>
                    </div>
                </div>
            )}
            

            <div id="backdrop" ref={backdropRef} className="backdrop" onClick={closeSidebar}></div>
        </div>
    )
}

export default AdminReservation;