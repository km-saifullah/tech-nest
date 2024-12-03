"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import config from "@/config/config";
import Image from "next/image";
import signup_image from "/public/signup_image.png";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // login input fields
  const handleLoginData = (e) => {
    const loginInfo = { ...loginData };
    loginInfo[e.target.name] = e.target.value;
    setLoginData(loginInfo);
  };

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginData.email === "" && loginData.password === "") {
      toast.warn("Invalid credential");
    } else {
      try {
        setIsLoaded(true);
        setIsLoggedIn(true);

        const loginLink = `${config.baseUrl}/${config.loginUrl}`;
        console.log(loginLink);
        const loggedInUser = await axios.post(loginLink, loginData);
        console.log(loggedInUser);

        setLoginData({
          email: "",
          password: "",
        });
      } catch (error) {
        // if (error.response) {
        //   console.log(error.response.data); // Server response with details
        // } else {
        //   console.log(error.message); // General error
        // }
        console.log(error.message);
      }
    }

    setIsLoaded(false);
    setIsLoggedIn(false);
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
  };
  return (
    <div suppressHydrationWarning={true} className="pt-14 pb-32">
      <div className="container">
        <div className="flex items-center justify-between">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="dark"
          />
          <div className="w-[750px]">
            <Image
              src={signup_image}
              alt="Signup image"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <h3 className="text-4xl text-primary font-inter font-medium leading-[30px] pb-6">
              Login to TechNest
            </h3>
            <p className="text-base text-primary font-poppins font-normal leading-6 pb-12">
              Enter your details below
            </p>
            <form action="" className="space-y-10">
              <div className="border-b">
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="w-full py-2 border-none outline-none text-base text-text font-poppins font-normal leading-6"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginData}
                />
              </div>
              <div className="border-b">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-2 border-none outline-none text-base text-text font-poppins font-normal leading-6"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginData}
                />
              </div>
              <div className="flex items-center justify-between">
                {isLoggedIn ? (
                  <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#DB4444"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                ) : (
                  <button
                    className="btn hover:text-primary hover:bg-white"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                )}

                <button
                  className="text-secondary"
                  onClick={handleForgetPassword}
                >
                  Forget Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
