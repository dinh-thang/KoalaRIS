import React from "react";
import logo from '../../images/logo.png';
import back from '../../images/back.png';
import { pageRoutes } from '../../constants/pageRoutes.js';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(pageRoutes.HOME);
  };

  return (
    <div className="bg-white flex flex-col h-screen">
      <div className="flex justify-start items-start p-4 z-10 ml-10 pt-10">
        <img src={back} alt="backbtn" className="size-8" onClick={navigateToHome} />
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="w-full max-w-md">
          <div className="flex justify-center items-center mb-24">
            <img src={logo} alt="logo" className="w-1/2" />
          </div>
          
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                Usernam
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Your Username"
              />
            </div>
            
            <div className="flex items-center justify-center">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;