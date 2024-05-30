import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home.jsx";
import Order from "./pages/order/order.jsx";
import Login from "./pages/login/login.jsx";
import './index.css';
import {pageRoutes} from "./constants/pageRoutes.js";
import Checkout from "./pages/checkout/checkout.jsx";
import CheckoutConfirmation from "./pages/checkout/confirm.jsx";

const App = () => {
  const routes = [
    { path: pageRoutes.HOME, element: <Home /> },
    { path: pageRoutes.LOGIN, element: <Login /> },
    { path: pageRoutes.ORDER, element: <Order /> },
    { path: pageRoutes.CHECKOUT, element: <Checkout /> },
    { path: pageRoutes.CHECKOUT_CONFIRMATION, element: <CheckoutConfirmation /> }
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