import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home.jsx";
import Order from "./pages/order/order.jsx";
import Login from "./pages/login/login.jsx";
import './index.css';
import {pageRoutes} from "./constants/pageRoutes.js";
import Checkout from "./pages/checkout/checkout.jsx";
import CheckoutConfirmation from "./pages/checkout/confirm.jsx";
import Admin from "./pages/admin/admin.jsx";
import AdminOrder from "./pages/admin/adminorder.jsx";
import AdminReservation from "./pages/admin/adminreservation.jsx";
import Reservation from "./pages/boooking/reservation.jsx";

const App = () => {
  const routes = [
    { path: pageRoutes.HOME, element: <Home /> },
    { path: pageRoutes.LOGIN, element: <Login /> },
    { path: pageRoutes.ORDER, element: <Order /> },
    { path: pageRoutes.CHECKOUT, element: <Checkout /> },
    { path: pageRoutes.CHECKOUT_CONFIRMATION, element: <CheckoutConfirmation /> },
    { path: pageRoutes.ADMIN, element: <Admin /> },
    { path: pageRoutes.ADMIN_ORDER, element: <AdminOrder /> },
    { path: pageRoutes.ADMIN_RESERVATION, element: <AdminReservation /> },
    { path: pageRoutes.RESERVATION, element: <Reservation /> },
  ];

  return (
      <Routes>
        {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={`${path}-${element.name}`}/>
        ))}
      </Routes>
  );
};

export default App;