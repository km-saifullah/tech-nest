import Link from "next/link";
import React from "react";

const Account = () => {
  return (
    <section className="pt-20 pb-28">
      <div className="container">
        <div className="flex items-center justify-between pb-20">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link className="" href={"/account"}>
                  Account
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-primary text-sm font-poppins font-normal leading-5">
              Welcome{" "}
              <span className="text-secondary text-sm font-poppins font-normal leading-5">
                John Cena
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h6 className="text-primary text-base font-poppins font-medium leading-6">
              Manage My Account
            </h6>
            <ul className="px-9 py-7 flex items-start start flex-col gap-2">
              <li>
                <Link
                  href={"/account"}
                  className="text-primary text-base font-normal font-poppins leading-6 hover:text-secondary"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href={"/address"}
                  className="text-primary text-base font-normal font-poppins leading-6 hover:text-secondary"
                >
                  Address Book
                </Link>
              </li>
              <li>
                <Link
                  href={"/payment-option"}
                  className="text-primary text-base font-normal font-poppins leading-6 hover:text-secondary"
                >
                  My Payment Options
                </Link>
              </li>
            </ul>
            <h6 className="text-primary text-base font-poppins font-medium leading-6">
              My Orders
            </h6>
            <ul className="px-9 py-7 flex items-start start flex-col gap-2">
              <li>
                <Link
                  href={"/address"}
                  className="text-primary text-base font-normal font-poppins leading-6 hover:text-secondary"
                >
                  My Returns
                </Link>
              </li>
              <li>
                <Link
                  href={"/payment-option"}
                  className="text-primary text-base font-normal font-poppins leading-6 hover:text-secondary"
                >
                  My Cancellations
                </Link>
              </li>
            </ul>
            <h6 className="text-primary text-base font-poppins font-medium leading-6">
              My Wishlist
            </h6>
          </div>
          <div className="">
            <h4 className="text-secondary text-xl font-poppins font-medium leading-6">
              Edit Your Profile
            </h4>

            <form action="" className="py-4">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-start justify-start flex-col space-y-3">
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="w-[330px] px-3 py-3 rounded bg-inputBg text-text text-base font-poppins font-normal leading-6 outline-none border-none"
                  />
                </div>
                <div className="flex items-start justify-start flex-col space-y-3">
                  <label htmlFor="name">Last Name</label>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="w-[330px] px-3 py-3 rounded bg-inputBg text-text text-base font-poppins font-normal leading-6 outline-none border-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-6 pt-6">
                <div className="flex items-start justify-start flex-col space-y-3">
                  <label htmlFor="name">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-[330px] px-3 py-3 rounded bg-inputBg text-text text-base font-poppins font-normal leading-6 outline-none border-none"
                  />
                </div>
                <div className="flex items-start justify-start flex-col space-y-3">
                  <label htmlFor="name">Address</label>
                  <input
                    type="text"
                    placeholder="Your Address"
                    className="w-[330px] px-3 py-3 rounded bg-inputBg text-text text-base font-poppins font-normal leading-6 outline-none border-none"
                  />
                </div>
              </div>
              <div className="w-full pt-6 flex items-start justify-start flex-col gap-6">
                <div className="flex items-start justify-start flex-col space-y-3">
                  <label htmlFor="name">Password Changes</label>
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-[710px] px-3 py-3 rounded bg-inputBg text-text text-base font-poppins font-normal leading-6 outline-none border-none"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-[710px] px-3 py-3 rounded bg-inputBg text-text text-base font-poppins font-normal leading-6 outline-none border-none"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-[710px] px-3 py-3 rounded bg-inputBg text-text text-base font-poppins font-normal leading-6 outline-none border-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-4 py-6">
                <div>
                  <button>Cancel</button>
                </div>
                <div>
                  <button className="btn hover:text-primary hover:bg-white">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
