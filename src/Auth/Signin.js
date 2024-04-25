import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    //api req to "/api/auth/userlogin" , METHOD:POST
    const response = await fetch(`http://localhost:4000/api/auth/userlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("auth-token", json.authtoken);
      localStorage.setItem("user",json.username)
      toast.success("Login Succesful....Redirecting to Home page", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(function () {
        navigate("/");
      }, 3000);
    } else {
      toast.error("Internal Server Error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleNewUser = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-row h-[100vh]">
      <div className="w-[65%] mx-auto shadow-2xl overflow-hidden relative hidden lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://png.pngtree.com/thumb_back/fh260/background/20200807/pngtree-calm-at-dark-sparkle-galaxy-nebula-background-image_386037.jpg"
          alt="dog training"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
        <div className="flex h-full items-center justify-center relative">
          <div className="flex flex-col justify-center items-center pl-2 w-1/2 lg:w-2/3">
            <div className="text-white absolute m-auto w-[50%]">
              <h2 className="text-white font-light text-xl mx-auto w-fit">
                Nice to see you again
              </h2>
              <h1 className="z-20 text-7xl font-bold text-white tracking-wide text-center">
                Welcome Back
              </h1>
              <div className="bg-white h-3 w-20 rounded-xl mx-auto my-8"></div>
              <p className="w-[50%] mx-auto">
              A Journey through the Solar System and Eclipse Phenomena
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] h-[100vh] grid place-content-center mx-auto">
        <form onSubmit={handleOnSubmit} className="flex flex-col">
          <h1 className="text-blue-600 font-bold text-7xl text-center mb-24 block lg:hidden">
            EduHub
          </h1>
          <h1 className="text-blue-600 font-bold text-5xl text-center mb-24">
            Login
          </h1>
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email ID"
            className="my-3 border-blue-600 border-l-2 bg-slate-100 h-8 w-72 focus:border-0"
            onChange={handleOnChange}
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="my-3 border-blue-600 border-l-2 bg-slate-100 h-8 w-72 focus:border-0"
            autoComplete="off"
            onChange={handleOnChange}
          />
          <h2>
            New user? Sign up{" "}
            <span
              className="text-blue-800 underline hover:cursor-pointer"
              onClick={handleNewUser}
            >
              here
            </span>
          </h2>

          <button
            type="submit"
            className="rounded-xl bg-blue-500 py-1 font-semibold mt-12 text-lg text-white hover:bg-blue-600"
          >
            Login
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Signin;