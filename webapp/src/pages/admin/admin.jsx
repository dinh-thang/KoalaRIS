import dinein from '../../images/dinein.png';
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../constants/pageRoutes.js";
import { React, useState, useEffect } from "react";
import { apiRoutes } from "../../constants/apiRoutes.js";

const Admin = () => {
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
    


    return (
    <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-32 bg-white shadow-lg flex flex-col justify-between">
            <div className="p-5">
                <button className="p-2 my-2 w-full bg-blue-500 text-white rounded text-left hover:bg-blue-600" onClick={navigateToAdmin}>
                    <img src={dinein} alt="Home" className="w-6 h-6 text-white"></img>    
                </button> 
                <button className="p-2 my-2 w-full bg-gray-200 rounded text-left hover:bg-gray-300" onClick={navigateToAdminOrder}>
                    <img src={dinein} alt="Home" className="w-6 h-6 text-white"></img>
                </button>
                <button className="p-2 my-2 w-full bg-gray-200 rounded text-left hover:bg-gray-300" onClick={navigateToAdminReservation}>
                    <img src={dinein} alt="Home" className="w-6 h-6 text-white"></img>
                </button>
            </div>
            <div className="p-5">
                <button className="p-2 w-full bg-gray-200 rounded text-left hover:bg-gray-300">
                    <img src={dinein} alt="Home" className="w-6 h-6 text-white"></img>
                </button>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
            <h1 className="font-bold text-2xl mb-5">Admin Page</h1>

            {/* Summary Section */}
            <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="bg-white p-5 shadow rounded">
                    <h2 className="font-bold mb-3">Summary</h2>
                    <p>Today's Sale:</p>
                    <p>Total Dine In Order: 1220</p>
                    <p>Total Guest: 12343</p>
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
                        {/* Sample Row */}
                        <tr className="mb-3">
                            <td>1904012</td>
                            <td>Quang Thang</td>
                            <td><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Dine In</span></td>
                            <td>5</td>
                            <td>1</td>
                            <td>$23</td>
                        </tr>
                        <tr className="mb-3">
                            <td>1904010</td>
                            <td>Quang Thang</td>
                            <td><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Dine In</span></td>
                            <td>5</td>
                            <td>1</td>
                            <td>$23</td>
                        </tr>
                        <tr className="mb-3">
                            <td>1904010</td>
                            <td>Quang Thang</td>
                            <td><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Dine In</span></td>
                            <td>5</td>
                            <td>1</td>
                            <td>$23</td>
                        </tr>
                        {/* Additional rows would be similar */}
                    </tbody>
                </table>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">More</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Admin;