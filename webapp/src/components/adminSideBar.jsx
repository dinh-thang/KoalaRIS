import React from 'react';
import dinein from '../images/dinein.png';
import { useLocation, useNavigate } from "react-router-dom";
import { pageRoutes } from "../constants/pageRoutes.js";
import homeIcon from "../images/home.svg";
import reserveIcon from "../images/reservation.svg";
import orderIcon from "../images/order.svg";
import logoutIcon from "../images/logout.svg";

const Sidebar = () => {
    const location = useLocation();
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
  
    const isActive = (path) => location.pathname === path;
  
    return (
      <div className="w-32 bg-white shadow-lg flex flex-col justify-between">
        <div className="p-5">
          <button
            className={`p-2 my-2 w-full rounded text-left ${isActive(pageRoutes.ADMIN) ? 'bg-red hover:bg-red-hover text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={navigateToAdmin}
          >
            <img src={homeIcon} alt="Orders" className={`w-6 h-6 ${isActive(pageRoutes.ADMIN) ? 'fill-dark-blue brightness-0 invert' : 'hover:filter brightness-0 invert'}`} />
          </button>
          <button
            className={`p-2 my-2 w-full rounded text-left ${isActive(pageRoutes.ADMIN_ORDER) ? 'bg-red hover:bg-red-hover text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={navigateToAdminOrder}
          >
            <img src={orderIcon} alt="Orders" className="w-6 h-6 text-white" />
          </button>
          <button
            className={`p-2 my-2 w-full rounded text-left ${isActive(pageRoutes.ADMIN_RESERVATION) ? 'bg-red hover:bg-red-hover  text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={navigateToAdminReservation}
          >
            <img src={reserveIcon} alt="Reservations" className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="p-5">
          <button className="p-2 w-full bg-gray-200 rounded text-left hover:bg-gray-300">
            <img src={logoutIcon} alt="Logout" className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;