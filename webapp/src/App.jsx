import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home.jsx";
import Order from "./pages/order/order.jsx";

import {pageRoutes} from "./constants/pageRoutes.js";
import Checkout from "./pages/checkout/checkout.jsx";

const App = () => {
  const routes = [
    { path: pageRoutes.HOME, element: <Home /> },
    { path: pageRoutes.ORDER, element: <Login /> },
    { path: pageRoutes.ORDER, element: <Order /> },
    { path: pageRoutes.CHECKOUT, element: <Checkout /> }
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