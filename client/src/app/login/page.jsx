"use client";
import { useState } from "react";
import Image from "next/image";
import signup_image from "/public/signup_image.png";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginData = (e) => {
    const loginInfo = { ...loginData };
    loginInfo[e.target.name] = e.target.value;
    setLoginData(loginInfo);
  };

  const handleLogin = (e) => {
    console.log("clicked");
    console.log(loginData);
    setLoginData({
      email: "",
      password: "",
    });
    e.preventDefault();
  };

  const handleForgetPassword = (e) => {
    console.log("Clicked");
    e.preventDefault();
  };
  return (
    <div className="pt-14 pb-32">
      <div className="container">
        <div className="flex items-center justify-between">
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
                <button className="btn" onClick={handleLogin}>
                  Login
                </button>
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
