import React, {useEffect, useState} from "react";
import logo from '../../images/logo.png';
import back from '../../images/back.png';

import { apiRoutes } from '../../constants/apiRoutes';

import { pageRoutes } from '../../constants/pageRoutes.js';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  async function SignUp() {    
    try {
      const url = username === "admin"
        ? `${apiRoutes.HTTP}${apiRoutes.LOGIN}?username=${username}`
        : `${apiRoutes.HTTP}${apiRoutes.SIGNUP}?username=${username}&accountType=Customer`;
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { success: true, isAdmin: username === "admin", data };
    } catch (error) {
      console.error("Error during sign up:", error);
      return { success: false, error: error.message };
    }
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const result = await SignUp();
    if (result.success) {
      navigate(result.isAdmin ? pageRoutes.ADMIN : pageRoutes.ORDER, { state: { userData: result.data } });
    }
  };

  return (
    <div className="bg-white flex flex-col h-screen">
      <div className="flex justify-start items-start p-4 z-10 ml-10 pt-10">
        <img src={back} alt="backbtn" className="cursor-pointer size-8" onClick={()=>navigate(pageRoutes.HOME)} />
      </div>

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="w-full max-w-md">
          <div className="flex justify-center items-center mb-24">
            <img src={logo} alt="logo" className="w-1/2" />
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Your Username"
                onChange={event => setUsername(event.target.value)}
              />
            </div>
            
            <div className="flex items-center justify-center">
                <button
                    className={`text-white bg-red font-bold py-2 px-4 rounded w-full`}
                    type="submit"
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