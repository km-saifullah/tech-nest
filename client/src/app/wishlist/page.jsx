"use client";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import cooler from "/public/cooler.png";
import keybaord from "/public/ak_keyboard.png";
import gamepad from "/public/usb_gamepad.png";
import ProtectedRoute from "@/components/ProtechRoutes";

const Wishlist = () => {
  return (
    <ProtectedRoute>
      <section className="">
        <div className="container">
          <div className="pt-20 pb-14 flex items-center justify-between">
            <h3 className="text-primary text-xl font-normal font-poppins leading-6">
              Wishlist (4)
            </h3>
            <button className="btn hover:bg-white hover:text-primary">
              Move All To Bag
            </button>
          </div>
          <div className="pb-20 flex items-center justify-start flex-wrap gap-3">
            <div className="h-[322 px] w-[270px] bg-inputBg rounded">
              <div className="p-3 flex items-center justify-between">
                <p className="py-1 px-3 rounded bg-secondary text-white text-xs font-normal font-poppins leading-4">
                  -35%
                </p>
                <div
                  className="cursor-pointer h-[34px] w-[34px] flex items-center justify-center bg-white rounded-full
              "
                >
                  <RiDeleteBin6Line className="text-xl" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="pt-3 pb-4 h-[180px] w-[190px] overflow-hidden grid place-items-center">
                  <Image
                    src={cooler}
                    alt="product name"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full bg-primary flex items-center justify-center rounded-b-lg">
                <button className="text-white text-sm font-normal font-poppins leading-4 py-3 w-full">
                  Add To Cart
                </button>
              </div>
              <div className="space-y-2 pt-4">
                <h3 className="text-primary text-base font-medium font-poppins leading-6">
                  RGB liquid CPU Cooler
                </h3>
                <div className="flex items-start gap-x-3">
                  <h4 className="text-secondary text-base font-medium font-poppins leading-6">
                    $960
                  </h4>
                  <h4 className="text-text text-base font-medium font-poppins leading-6 line-through">
                    $1160
                  </h4>
                </div>
              </div>
            </div>
            <div className="h-[322 px] w-[270px] bg-inputBg rounded">
              <div className="p-3 flex items-center justify-between">
                <p className="py-1 px-3 rounded bg-secondary text-white text-xs font-normal font-poppins leading-4">
                  -35%
                </p>
                <div
                  className="cursor-pointer h-[34px] w-[34px] flex items-center justify-center bg-white rounded-full
              "
                >
                  <RiDeleteBin6Line className="text-xl" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="pt-3 pb-4 h-[180px] w-[190px] overflow-hidden grid place-items-center">
                  <Image
                    src={keybaord}
                    alt="product name"
                    className="h-full w-full object-contain pb-2"
                  />
                </div>
              </div>
              <div className="w-full bg-primary flex items-center justify-center rounded-b-lg">
                <button className="text-white text-sm font-normal font-poppins leading-4 py-3 w-full">
                  Add To Cart
                </button>
              </div>
              <div className="space-y-2 pt-4">
                <h3 className="text-primary text-base font-medium font-poppins leading-6">
                  RGB liquid CPU Cooler
                </h3>
                <div className="flex items-start gap-x-3">
                  <h4 className="text-secondary text-base font-medium font-poppins leading-6">
                    $960
                  </h4>
                  <h4 className="text-text text-base font-medium font-poppins leading-6 line-through">
                    $1160
                  </h4>
                </div>
              </div>
            </div>
            <div className="h-[322 px] w-[270px] bg-inputBg rounded">
              <div className="p-3 flex items-center justify-between">
                <p className="py-1 px-3 rounded bg-secondary text-white text-xs font-normal font-poppins leading-4">
                  -35%
                </p>
                <div
                  className="cursor-pointer h-[34px] w-[34px] flex items-center justify-center bg-white rounded-full
              "
                >
                  <RiDeleteBin6Line className="text-xl" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="pt-3 pb-4 h-[180px] w-[190px] overflow-hidden grid place-items-center">
                  <Image
                    src={gamepad}
                    alt="product name"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full bg-primary flex items-center justify-center rounded-b-lg">
                <button className="text-white text-sm font-normal font-poppins leading-4 py-3 w-full">
                  Add To Cart
                </button>
              </div>
              <div className="space-y-2 pt-4">
                <h3 className="text-primary text-base font-medium font-poppins leading-6">
                  RGB liquid CPU Cooler
                </h3>
                <div className="flex items-start gap-x-3">
                  <h4 className="text-secondary text-base font-medium font-poppins leading-6">
                    $960
                  </h4>
                  <h4 className="text-text text-base font-medium font-poppins leading-6 line-through">
                    $1160
                  </h4>
                </div>
              </div>
            </div>
            <div className="h-[322 px] w-[270px] bg-inputBg rounded">
              <div className="p-3 flex items-center justify-between">
                <p className="py-1 px-3 rounded bg-secondary text-white text-xs font-normal font-poppins leading-4">
                  -35%
                </p>
                <div
                  className="cursor-pointer h-[34px] w-[34px] flex items-center justify-center bg-white rounded-full
              "
                >
                  <RiDeleteBin6Line className="text-xl" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="pt-3 pb-4 h-[180px] w-[190px] overflow-hidden grid place-items-center">
                  <Image
                    src={cooler}
                    alt="product name"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full bg-primary flex items-center justify-center rounded-b-lg">
                <button className="text-white text-sm font-normal font-poppins leading-4 py-3 w-full">
                  Add To Cart
                </button>
              </div>
              <div className="space-y-2 pt-4">
                <h3 className="text-primary text-base font-medium font-poppins leading-6">
                  RGB liquid CPU Cooler
                </h3>
                <div className="flex items-start gap-x-3">
                  <h4 className="text-secondary text-base font-medium font-poppins leading-6">
                    $960
                  </h4>
                  <h4 className="text-text text-base font-medium font-poppins leading-6 line-through">
                    $1160
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default Wishlist;
