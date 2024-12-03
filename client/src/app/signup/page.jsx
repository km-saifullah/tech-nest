"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import EmailConfirmationModal from "@/components/Modal";
import signup_image from "/public/signup_image.png";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleRegisterData = (e) => {
    const registerInfo = { ...registerData };
    registerInfo[e.target.name] = e.target.value;
    setRegisterData(registerInfo);
  };

  const handleCreateAccount = async (e) => {
    console.log(registerData);
    e.preventDefault();
    const createAccountUrl = "https://tech-nest-2xsb.onrender.com/api/v1/users";
    try {
      const response = await axios.post(createAccountUrl, registerData);
      console.log(response);
      setRegisterData({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
      });
      setIsModalOpen(true);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data); // Server response with details
      } else {
        console.log(error.message); // General error
      }
    }
  };
  return (
    <div className="pt-14 pb-32">
      <div className="container">
        <div className="flex items-center justify-between">
          {isModalOpen ? (
            <EmailConfirmationModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
            />
          ) : null}
          <div className="w-[750px]">
            <Image
              src={signup_image}
              alt="Signup image"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <h3 className="text-4xl text-primary font-inter font-medium leading-[30px] pb-6">
              Create an account
            </h3>
            <p className="text-base text-primary font-poppins font-normal leading-6 pb-12">
              Enter your details below
            </p>
            <form action="" className="space-y-10">
              <div className="border-b">
                <input
                  type="text"
                  placeholder="Enter Fullname"
                  className="w-full py-2 border-none outline-none text-base text-text font-poppins font-normal leading-6"
                  name="fullName"
                  value={registerData.fullName}
                  onChange={handleRegisterData}
                />
              </div>
              <div className="border-b">
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full py-2 border-none outline-none text-base text-text font-poppins font-normal leading-6"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterData}
                />
              </div>
              <div className="border-b">
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full py-2 border-none outline-none text-base text-text font-poppins font-normal leading-6"
                  name="phoneNumber"
                  value={registerData.phoneNumber}
                  onChange={handleRegisterData}
                />
              </div>
              <div className="border-b">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-2 border-none outline-none text-base text-text font-poppins font-normal leading-6"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterData}
                />
              </div>
              <div className="w-full">
                <button
                  className="btn w-full hover:text-primary hover:bg-white"
                  onClick={handleCreateAccount}
                >
                  Create Account
                </button>
              </div>
            </form>
            <div className="w-full flex items-center justify-center gap-x-4 border border-border-line cursor-pointer py-4 rounded mt-4 mb-8">
              <div>
                <FcGoogle />
              </div>
              <div>
                <h3 className="text-primary text-base font-poppins font-normal leading-6">
                  Sign up with Google
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <p className="text-text text-base font-poppins font-normal leading-6">
                Already have an account?
              </p>
              <Link
                href={"/login"}
                className="text-text text-base font-poppins font-normal leading-6 underline"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
