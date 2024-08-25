"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import havitGamepad from "/public/havit_gamepad.png";
import keyboard from "/public/ak_keyboard.png";
import monitor from "/public/monitor.png";
import Link from "next/link";

const FlashSale = () => {
  return (
    <section>
      <div className="pb-6 flex items-center justify-between">
        <h3 className="main-heading">Flash Sales</h3>
        <div className="flex items-center justify-between gap-x-3">
          <div className="flex items-start flex-col gap-1">
            <p className="text-primary text-sm font-poppins font-medium leading-4">
              Days
            </p>
            <p className="text-primary text-3xl font-inter font-bold leading-7">
              03 <span className="text-secondary"> :</span>
            </p>
          </div>
          <div className="flex items-start flex-col gap-1">
            <p className="text-primary text-sm font-poppins font-medium leading-4">
              Hours
            </p>
            <p className="text-primary text-3xl font-inter font-bold leading-7">
              23 <span className="text-secondary"> :</span>
            </p>
          </div>
          <div className="flex items-start flex-col gap-1">
            <p className="text-primary text-sm font-poppins font-medium leading-4">
              Minutes
            </p>
            <p className="text-primary text-3xl font-inter font-bold leading-7">
              19 <span className="text-secondary"> :</span>
            </p>
          </div>
          <div className="flex items-start flex-col gap-1">
            <p className="text-primary text-sm font-poppins font-medium leading-4">
              Seconds
            </p>
            <p className="text-primary text-3xl font-inter font-bold leading-7">
              56
            </p>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[360px] w-[270px] rounded border border-border-line px-3 py-4">
              <div className="flex items-start justify-between">
                <div className="w-[55px] h-[26px] rounded bg-secondary text-light font-poppins text-base">
                  -40%
                </div>
                <div className="pt-12 w-[190px] h-[180px] flex items-center justify-center flex-col space-y-2">
                  <Image
                    src={havitGamepad}
                    alt="Gamepad"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FaRegHeart />
                  </div>
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FiEye />
                  </div>
                </div>
              </div>
              <div className="w-full pt-4">
                <button className="w-full text-light bg-primary py-1 px-6  rounded">
                  Add To Cart
                </button>
              </div>
              <div className="pt-4 space-y-2 ">
                <div className="flex items-start">
                  <h3 className="text-primary text-base font-poppins font-medium leading-6">
                    HAVIT HV-G92 Gamepad
                  </h3>
                </div>
                <div className="flex items-start gap-x-2">
                  <p className="text-secondary text-base font-inter font-normal leading-6">
                    $120
                  </p>
                  <p className="text-text text-base font-inter font-normal leading-6 line-through">
                    $160
                  </p>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="flex items-center gap-x-1">
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                  </div>
                  <div>
                    <p className="text-text text-base font-inter font-normal leading-6">
                      (88)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[360px] w-[270px] rounded border border-border-line px-3 py-4">
              <div className="flex items-start justify-between">
                <div className="w-[55px] h-[26px] rounded bg-secondary text-light font-poppins text-base">
                  -35%
                </div>
                <div className="pt-12 w-[190px] h-[180px] flex items-center justify-center flex-col space-y-2">
                  <Image
                    src={keyboard}
                    alt="Gamepad"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FaRegHeart />
                  </div>
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FiEye />
                  </div>
                </div>
              </div>
              <div className="w-full pt-4">
                <button className="w-full text-light bg-primary py-1 px-6  rounded">
                  Add To Cart
                </button>
              </div>
              <div className="pt-4 space-y-2 ">
                <div className="flex items-start">
                  <h3 className="text-primary text-base font-poppins font-medium leading-6">
                    AK-900 Wired Keyboard
                  </h3>
                </div>
                <div className="flex items-start gap-x-2">
                  <p className="text-secondary text-base font-inter font-normal leading-6">
                    $960
                  </p>
                  <p className="text-text text-base font-inter font-normal leading-6 line-through">
                    $1160
                  </p>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="flex items-center gap-x-1">
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                  </div>
                  <div>
                    <p className="text-text text-base font-inter font-normal leading-6">
                      (75)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[360px] w-[270px] rounded border border-border-line px-3 py-4">
              <div className="flex items-start justify-between">
                <div className="w-[55px] h-[26px] rounded bg-secondary text-light font-poppins text-base">
                  -30%
                </div>
                <div className="pt-12 w-[190px] h-[180px] flex items-center justify-center flex-col space-y-2">
                  <Image
                    src={monitor}
                    alt="Gamepad"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FaRegHeart />
                  </div>
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FiEye />
                  </div>
                </div>
              </div>
              <div className="w-full pt-4">
                <button className="w-full text-light bg-primary py-1 px-6  rounded">
                  Add To Cart
                </button>
              </div>
              <div className="pt-4 space-y-2 ">
                <div className="flex items-start">
                  <h3 className="text-primary text-base font-poppins font-medium leading-6">
                    IPS LCD Gaming Monitor
                  </h3>
                </div>
                <div className="flex items-start gap-x-2">
                  <p className="text-secondary text-base font-inter font-normal leading-6">
                    $370
                  </p>
                  <p className="text-text text-base font-inter font-normal leading-6 line-through">
                    $400
                  </p>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="flex items-center gap-x-1">
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                  </div>
                  <div>
                    <p className="text-text text-base font-inter font-normal leading-6">
                      (99)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[360px] w-[270px] rounded border border-border-line px-3 py-4">
              <div className="flex items-start justify-between">
                <div className="w-[55px] h-[26px] rounded bg-secondary text-light font-poppins text-base">
                  -40%
                </div>
                <div className="pt-12 w-[190px] h-[180px] flex items-center justify-center flex-col space-y-2">
                  <Image
                    src={havitGamepad}
                    alt="Gamepad"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FaRegHeart />
                  </div>
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FiEye />
                  </div>
                </div>
              </div>
              <div className="w-full pt-4">
                <button className="w-full text-light bg-primary py-1 px-6  rounded">
                  Add To Cart
                </button>
              </div>
              <div className="pt-4 space-y-2 ">
                <div className="flex items-start">
                  <h3 className="text-primary text-base font-poppins font-medium leading-6">
                    HAVIT HV-G92 Gamepad
                  </h3>
                </div>
                <div className="flex items-start gap-x-2">
                  <p className="text-secondary text-base font-inter font-normal leading-6">
                    $120
                  </p>
                  <p className="text-text text-base font-inter font-normal leading-6 line-through">
                    $160
                  </p>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="flex items-center gap-x-1">
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                  </div>
                  <div>
                    <p className="text-text text-base font-inter font-normal leading-6">
                      (88)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[360px] w-[270px] rounded border border-border-line px-3 py-4">
              <div className="flex items-start justify-between">
                <div className="w-[55px] h-[26px] rounded bg-secondary text-light font-poppins text-base">
                  -40%
                </div>
                <div className="pt-12 w-[190px] h-[180px] flex items-center justify-center flex-col space-y-2">
                  <Image
                    src={havitGamepad}
                    alt="Gamepad"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FaRegHeart />
                  </div>
                  <div className="h-9 w-9 rounded-full bg-text flex items-center justify-center text-light text-xl cursor-pointer">
                    <FiEye />
                  </div>
                </div>
              </div>
              <div className="w-full pt-4">
                <button className="w-full text-light bg-primary py-1 px-6  rounded">
                  Add To Cart
                </button>
              </div>
              <div className="pt-4 space-y-2 ">
                <div className="flex items-start">
                  <h3 className="text-primary text-base font-poppins font-medium leading-6">
                    HAVIT HV-G92 Gamepad
                  </h3>
                </div>
                <div className="flex items-start gap-x-2">
                  <p className="text-secondary text-base font-inter font-normal leading-6">
                    $120
                  </p>
                  <p className="text-text text-base font-inter font-normal leading-6 line-through">
                    $160
                  </p>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="flex items-center gap-x-1">
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                    <IoIosStar className="text-[#FFAD33] text-xl" />
                  </div>
                  <div>
                    <p className="text-text text-base font-inter font-normal leading-6">
                      (88)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center justify-center pt-9">
        <Link href={"/products"}>
          <button className="btn hover:bg-primary hover:text-light">
            View All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FlashSale;
