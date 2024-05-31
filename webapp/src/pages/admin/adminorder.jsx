import './admin.css';
import Cookies from 'js-cookies';
import AdminOrderItem from '../../components/AdminOrderItem.jsx';
import AdminSideBar from "../../components/adminSideBar.jsx";
import {useState, useRef, useEffect} from 'react';
import apiRoutes from "../../constants/apiRoutes";

const AdminOrder = () => {
    const [selectedOrder, setSelectedOrder] = useState();
    const sidebarRef = useRef(null);
    const backdropRef = useRef(null);
    const [tableData, setTableData] = useState([]);

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

    useEffect(() => {
        fetchAllOrders().then();
    }, []);

    const fetchAllOrders = async () => {
        await fetch(`${apiRoutes.HTTP}${apiRoutes.ORDER_GET_ALL_FOR_ACCOUNT}?accountId=${Cookies.getItem("accountId")}`)
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
                <h1 className="font-bold text-3xl mb-6">Order</h1>

                {/* Orders Table */}
                <div className="bg-white p-5 shadow rounded">
                    <table className="w-full text-left">
                        <thead className="text-gray-700">
                            <tr>
                                <th className="px-4 py-2">Order No.</th>
                                <th className="px-4 py-2">Customer Name</th>
                                <th className="px-4 py-2">Method</th>
                                <th className="px-4 py-2">Table No.</th>
                                <th className="px-4 py-2">Meals No.</th>
                                <th className="px-4 py-2">Bill</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {tableData.map((item, index) => (
                                <AdminOrderItem
                                    order_no={item.id}
                                    customer_name={item.account.name}
                                    method={item.deliveryDetail === null ? "Dine In" : "Delivery"}
                                    table_no={item.account.name}
                                    meal_no={item.id}
                                    bill={5}
                                    onClick={() => openSidebar(item)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detail Sidebar (Initially hidden) */}
            {selectedOrder && (
                <div id="detailSidebar" ref={sidebarRef} className="w-96 bg-white p-8 shadow-lg fixed right-0 top-0 h-full z-50">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-xl">Order</h2>
                        <button onClick={closeSidebar}>X</button>
                    </div>
                    <h2 className="font-bold text-xl mb-6">{selectedOrder.id}</h2>
                    <div>
                        <h3 className="font-bold mb-5">Customer Detail</h3>
                        <p>Customer: {selectedOrder.account.name}</p>
                        <p>Table: {selectedOrder.account.name}</p>
                        <p className="mb-5">Order time: {selectedOrder.created}</p>
                        <p>Phone Number: {selectedOrder.account.phoneNumber}</p>
                        <p>Email: {selectedOrder.account.email}</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold mb-5">Meals</h3>
                        <ul>
                            {selectedOrder.cart.items.map((meal) => (
                                <li>{meal.name}: {meal.price}</li>
                            ))}
                        </ul>
                        <hr className="mt-5 mb-5"></hr>
                        <p className="font-bold">Order Total: {selectedOrder.bill}</p>
                    </div>
                </div>
            )}

            <div id="backdrop" ref={backdropRef} className="backdrop" onClick={closeSidebar}></div>
        </div>
    )
}

export default AdminOrder;
