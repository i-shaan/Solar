import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ active }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth-token'));

  const handleLogout = () => {

    localStorage.removeItem('auth-token');
  
    setIsLoggedIn(false);
    
    toast.success("Logged out successfully!");
 
  };

  useEffect(() => {
  
    setIsLoggedIn(localStorage.getItem('auth-token'));
  }, [isLoggedIn]); 

  return (
    <>
      <ToastContainer />
      <nav className="bg-[#333]">
        <div className=" ">
          <div className="flex items-center justify-between h-[10vh]">
            <div className="flex  items-center h-full">
              <Link
                to="/"
                className={`${active === 'home' ? 'bg-[#111]' : '' } h-full flex items-center text-gray-300 hover:bg-[#111] px-4 transition duration-300 ease-in-out"}`}
              >
                Home
              </Link>
              <Link
                to="/feed"
                className="  h-full flex items-center text-gray-300 hover:bg-[#111] px-4 transition duration-300 ease-in-out"
              >
                Feedback
              </Link>
              {!isLoggedIn && (
                <Link
                  to="/Signup"
                  className="h-full flex items-center text-gray-300 hover:bg-[#111] px-4 transition duration-300 ease-in-out"
                >
                  Sign up
                </Link>
              )}
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  className=" h-full flex items-center text-gray-300 hover:bg-[#111] px-4 transition duration-300 ease-in-out"
                >
                  Log In
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="h-full flex items-center text-gray-300 hover:bg-[#111] px-4 transition duration-300 ease-in-out"
                >
                  Log Out
                </button>
              )}
              <Link
                to="/quiz"
                className={`${active === 'quiz' ? 'bg-[#111]' : '' } h-full flex items-center text-gray-300 hover:bg-[#111] px-4 transition duration-300 ease-in-out"}`}
                >
              
                Quiz
              </Link>
              <Link
                to="/explore"
                className={`${active === 'explore' ? 'bg-[#111]' : '' } h-full flex items-center text-gray-300 hover:bg-[#111] px-4 transition duration-300 ease-in-out"}`}
              >
                Explore
              </Link>
              <Link
                to="/video"
                className={`${active === 'video' ? 'bg-[#111]' : '' } h-full flex items-center text-gray-300 hover:bg-[#111] px-4 transition duration-300 ease-in-out"}`}
              >
                Videos
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
