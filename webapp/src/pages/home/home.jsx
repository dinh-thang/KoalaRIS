import React from "react";
import './home.css';
import logo from '../../images/logo.png';
import dinein from '../../images/dinein.png';
import takeaway from '../../images/takeaway.png';
import '../../index.css';
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../constants/pageRoutes.js";

const Home = () => {

    const navigate = useNavigate();

    const navigateToOrder = () => {
      navigate(pageRoutes.ORDER);
    };

    return (
        <div className="koala__home-container__home">
            <div className="koala__home-container__logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="koala__home-container__btn-container">
                <div className="koala__home-container__button button1">
                    <img src={dinein} alt="dinein" />
                    <button className="btn btn1" onClick={navigateToOrder} >Dine In</button>
                </div>
            
                <div className="koala__home-container__button button2">
                    <img src={takeaway} alt="takeaway" />
                    <a href="">
                        <button className="btn btn2" onClick={navigateToOrder} >Delivery</button>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Home;