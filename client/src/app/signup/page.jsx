import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import signup_image from "/public/signup_image.png";
import Link from "next/link";

const Signup = () => {
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
              Create an account
            </h3>
            <p className="text-base text-primary font-poppins font-normal leading-6 pb-12">
              Enter your details below
            </p>
            <form action="" className="space-y-10">
              <div className="border-b">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-2 border-none outline-none text-base text-text font-poppins font-normal leading-6"
                />
              </div>
              <div className="border-b">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full py-2 border-none outline-none text-base text-text font-poppins font-normal leading-6"
                />
              </div>
              <div className="border-b">
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full py-2 border-none outline-none text-base text-text font-poppins font-normal leading-6"
                />
              </div>
              <div className="w-full">
                <button className="btn w-full">Create Account</button>
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
