import React from "react";
import './home.css';
import logo from '../../images/logo.png';
import dinein from '../../images/dinein.png';
import takeaway from '../../images/takeaway.png';
import '../../index.css';
import { useNavigate, Link } from "react-router-dom";
import { pageRoutes } from '../../constants/pageRoutes.js';
import user from '../../images/user.png';

const Home = () => {
    const navigate = useNavigate();

    const navigateToOrder = () => {
        navigate(pageRoutes.ORDER);
    };

    return (
        <div className="koala__home-container">
            <div className="koala__home-container__header">
                <div className="koala__home-container__loginbtn">
                    <img src={user} alt="login_icon"/>
                    <Link to="/login"><span>Login</span></Link>
                </div>
            </div>
            
            <div className="koala__home-container__home">
                <div className="koala__home-container__logo">
                    <img src={logo} alt="logo" />
                </div>
                
                <div className="koala__home-container__button-container">
                    <div className="koala__home-container__button button1">
                        <div className="circle">
                            <img src={dinein} alt="dinein" />
                        </div>
                        <button className="btn btn1" onClick={navigateToOrder}>Dine In</button>
                    </div>
                
                    <div className="koala__home-container__button button2">
                        <div className="circle">
                            <img src={takeaway} alt="takeaway" />
                        </div>
                        <button className="btn btn2" onClick={navigateToOrder}>Delivery</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;