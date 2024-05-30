const Home = () => {
    return (
<<<<<<< Updated upstream
        <div>Home</div>
=======
        <div className="koala__home-container__home">
            <div className="koala__home-container__logo">
                <img src={logo} alt="logo" />
            </div>

            {/* add login button */}
            <div className="koala__home-container__login">
                <Link to="/login" className="koala__home-container__link"><span>Login</span></Link>
            </div>

            <div className="koala__home-container__btn-container">
                <div className="koala__home-container__button button1">
                    <img src={dinein} alt="dinein" />
                    <button className="btn btn1" onClick={navigateToOrder} >Dine In</button>
                </div>
            
                <div className="koala__home-container__button button2">
                    <img src={takeaway} alt="takeaway" />
                        <button className="btn btn2" onClick={navigateToOrder} >Delivery</button>
                </div>
            </div>
        </div>
>>>>>>> Stashed changes
    )
}

export default Home;