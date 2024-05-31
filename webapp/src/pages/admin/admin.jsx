import { React, useState, useEffect } from "react";
import AdminSideBar from "../../components/adminSideBar.jsx";
import apiRoutes from '../../constants/apiRoutes.js';
import Cookies from "js-cookies";
import { useLocation, useNavigate } from "react-router-dom";

const Admin = () => {
	const [totalDinein, setTotalDinein] = useState([]);
	const [totalTa, setTotalTa] = useState([]);
	const [totalGuests, setTotalGuests] = useState([]);
	const [tableData, setTableData] = useState([]);


    useEffect(() => {
			fetchTotalDineIn().then();
			fetchTotalTa().then();
			fetchTotalGuests().then();
			fetchAllOrders().then();
		}, []);

		const fetchTotalDineIn = async () =>{
			await fetch(`${apiRoutes.HTTP}${apiRoutes.ADMIN_GET_TOTAL_DINE_IN}?accountId=${Cookies.getItem("accountId")}`)
			.then(res => res.json())
			.then(data => {
				setTotalDinein(data);
			})
			.catch(error => console.error('Error fetching data:', error));
		}

		const fetchTotalTa = async () =>{
			await fetch(`${apiRoutes.HTTP}${apiRoutes.ADMIN_GET_TOTAL_TAKEAWAY}?accountId=${Cookies.getItem("accountId")}`)
			.then(res => res.json())
			.then(data => {
				setTotalTa(data);
			})
			.catch(error => console.error('Error fetching data:', error));
		}

		const fetchTotalGuests = async () =>{
			await fetch(`${apiRoutes.HTTP}${apiRoutes.ADMIN_GET_TOTAL_GUESTS}?accountId=${Cookies.getItem("accountId")}`)
			.then(res => res.json())
			.then(data => {
				setTotalGuests(data);
			})
			.catch(error => console.error('Error fetching data:', error));
		}

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
            <h1 className="font-bold text-red text-2xl mb-5">Admin Page</h1>

            {/* Summary Section */}
            <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="bg-white p-5 shadow rounded">
                    <h2 className="font-bold mb-3">Summary</h2>
                    <p>Today Takeaway Order: {totalTa}</p>
                    <p>Total Dine In Order: {totalDinein}</p>
                    <p>Total Guest: {totalGuests}</p>
                </div>

                {/* Best Seller Meal Section */}
                <div className="col-span-2 bg-white p-5 shadow rounded">
                    <h2 className="font-bold mb-3">Best Seller Meal</h2>
                    <p>Bibimbap: 123</p>
                    <p>Tokkboki: 154</p>
                    <p>Fries: 172</p>
                </div>
            </div>

            {/* Orders Section */}
            <div className="bg-white p-5 shadow rounded">
                <h2 className="font-bold mb-3">Orders</h2>
                <table className="w-full text-left mb-4">
                    <thead>
                        <tr>
                            <th>Order No.</th>
                            <th>Customer Name</th>
                            <th>Method</th>
                            <th>Table No.</th>
                            <th>Meals No.</th>
                            <th>Bill</th>
                        </tr>
                    </thead>
                    <tbody>
											{tableData.map((row, index) => (
												<tr key={index} className="mb-3">
													<td>{row.id}</td>
													<td>{row.account.name}</td>
													<td>
														<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red text-red-800">
															{row.deliveryDetail === null ? "Dine In" : "Delivery"}
														</span>
													</td>
													<td>{row.account.name}</td>
													<td>{row.quantity}</td>
													<td>{row.price}</td>
												</tr>
											))}
                    </tbody>
                </table>
                <div className="flex justify-center">
                    <button className="bg-red hover:bg-red-hover text-white font-bold py-2 px-16 rounded">More</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Admin;