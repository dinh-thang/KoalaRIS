import dinein from '../../images/dinein.png';
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../constants/pageRoutes.js";
import { React, useState, useEffect } from "react";
import AdminSideBar from "../../components/adminSideBar.jsx";

const Admin = () => {

    const [totalSale, setTotalSale] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5296/admin/get-total-sale-today")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setTotalSale(data);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);


    return (
    <div class="flex min-h-screen">
        {/* Sidebar */}
        <AdminSideBar />

        {/* Main Content */}
        <div class="flex-1 p-8">
            <h1 class="font-bold text-red text-2xl mb-5">Admin Page</h1>

            {/* Summary Section */}
            <div class="grid grid-cols-3 gap-4 mb-5">
                <div class="bg-white p-5 shadow rounded">
                    <h2 class="font-bold mb-3">Summary</h2>
                    <p>Today's Sale: {totalSale}</p>
                    <p>Total Dine In Order: 1220</p>
                    <p>Total Guest: 12343</p>
                </div>

                {/* Best Seller Meal Section */}
                <div class="col-span-2 bg-white p-5 shadow rounded">
                    <h2 class="font-bold mb-3">Best Seller Meal</h2>
                    <p>Bibimbap: 123</p>
                    <p>Tokkboki: 154</p>
                    <p>Fries: 172</p>
                </div>
            </div>

            {/* Orders Section */}
            <div class="bg-white p-5 shadow rounded">
                <h2 class="font-bold mb-3">Orders</h2>
                <table class="w-full text-left mb-4">
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
                        <tr class="mb-3">
                            <td>1904012</td>
                            <td>Quang Thang</td>
                            <td><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Dine In</span></td>
                            <td>5</td>
                            <td>1</td>
                            <td>$23</td>
                        </tr>
                        <tr class="mb-3">
                            <td>1904010</td>
                            <td>Quang Thang</td>
                            <td><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Dine In</span></td>
                            <td>5</td>
                            <td>1</td>
                            <td>$23</td>
                        </tr>
                        <tr class="mb-3">
                            <td>1904010</td>
                            <td>Quang Thang</td>
                            <td><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Dine In</span></td>
                            <td>5</td>
                            <td>1</td>
                            <td>$23</td>
                        </tr>
                        {/* Additional rows would be similar */}
                    </tbody>
                </table>
                <div class="flex justify-center">
                    <button class="bg-red hover:bg-red-hover text-white font-bold py-2 px-16 rounded">More</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Admin;