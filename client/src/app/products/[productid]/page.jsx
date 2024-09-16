import Link from "next/link";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import ps1 from "/public/ps1.png";
import ps2 from "/public/ps2.png";
import ps3 from "/public/ps3.png";
import ps4 from "/public/ps4.png";
import ps5 from "/public/ps5.png";
import cooler from "/public/cooler.png";
import keyboard from "/public/ak_keyboard.png";
import gamepad from "/public/havit_gamepad.png";

const SingleProduct = () => {
  return (
    <section>
      <div className="container">
        <div className="breadcrumbs text-sm py-20">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/products/1"}>PS5 Controlller</Link>
            </li>
          </ul>
        </div>

        {/* ====== Single Product Info Start ====== */}
        <div className="flex items-center justify-between gap-x-10 pb-8">
          <div className="flex items-center justify-center flex-col gap-10">
            <div className="w-[170px] h-[140px] overflow-hidden flex items-center justify-center bg-inputBg rounded cursor-pointer">
              <Image
                src={ps1}
                alt="product name"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[170px] h-[140px] overflow-hidden flex items-center justify-center bg-inputBg rounded cursor-pointer">
              <Image
                src={ps2}
                alt="product name"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[170px] h-[140px] overflow-hidden flex items-center justify-center bg-inputBg rounded cursor-pointer">
              <Image
                src={ps3}
                alt="product name"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[170px] h-[140px] overflow-hidden flex items-center justify-center bg-inputBg rounded cursor-pointer">
              <Image
                src={ps4}
                alt="product name"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-[500px] h-[600px] overflow-hidden">
            <Image
              src={ps5}
              alt="product name"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-primary text-2xl font-semibold font-inter leading-6">
              Playstation (PS5) Controller
            </h2>
            <div className="flex items-center justify-between gap-x-3 py-4">
              <div className="flex items-center justify-center gap-2">
                <IoIosStar className="h-5 w-5 text-orange-400" />
                <IoIosStar className="h-5 w-5 text-orange-400" />
                <IoIosStar className="h-5 w-5 text-orange-400" />
                <IoIosStar className="h-5 w-5 text-orange-400" />
                <IoIosStarOutline className="h-5 w-5 text-orange-400" />
              </div>
              <p className="text-text text-sm font-normal font-poppins leading-5">
                ( 150 Reviews ) |{" "}
              </p>
              <p className="text-sm text-[#00FF66] font-normal font-poppins leading-5">
                In stock
              </p>
            </div>
            <h2 className="pt-4 pb-6 text-primary text-2xl font-inter font-normal leading-6">
              $192.00
            </h2>
            <p className="w-[373px] pb-6 text-primary text-sm font-poppins font-normal leading-5">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <hr className="border mb-6" />
            <div className="flex items-start gap-x-3">
              <p className="text-primary text-xl font-poppins font-normal leading-5">
                Colors:
              </p>
              <div className="flex items-start justify-start gap-x-2">
                <input
                  id="red"
                  type="radio"
                  name="color"
                  value="red"
                  className="h-5 w-5"
                />
                <label htmlFor="red">Red</label>
                <input
                  id="blue"
                  type="radio"
                  name="color"
                  value="blue"
                  className="h-5 w-5"
                />
                <label htmlFor="blue">Blue</label>
              </div>
            </div>
            <div className="py-6 flex items-center justify-start gap-x-2">
              <p className="text-primary text-xl font-poppins font-normal leading-5">
                Size:
              </p>
              <div className="flex gap-x-3">
                <div className="w-8 h-8 rounded-md border flex items-center justify-center">
                  <button className="w-full h-full hover:bg-secondary hover:text-white hover:rounded-md">
                    S
                  </button>
                </div>
                <div className="w-8 h-8 rounded-md border flex items-center justify-center">
                  <button className="w-full h-full hover:bg-secondary hover:text-white hover:rounded-md">
                    M
                  </button>
                </div>
                <div className="w-8 h-8 rounded-md border flex items-center justify-center">
                  <button className="w-full h-full hover:bg-secondary hover:text-white hover:rounded-md">
                    L
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <button className="h-[44px] w-[40px] border rounded-l-md text-primary text-2xl font-medium font-poppins hover:text-white hover:bg-secondary">
                  -
                </button>
                <button className="h-[44px] w-[80px] border text-primary text-2xl font-medium font-poppins">
                  0
                </button>
                <button className="h-[44px] w-[40px] border rounded-r-md text-primary text-2xl font-medium font-poppins hover:text-white hover:bg-secondary">
                  +
                </button>
              </div>
              <div>
                <button className="btn px-9 py-2 hover:text-primary hover:bg-white">
                  Buy Now
                </button>
              </div>
              <div className="w-10 h-10 rounded-md flex items-center justify-center border cursor-pointer">
                <FaRegHeart className="text-primary text-2xl" />
              </div>
            </div>
          </div>
        </div>
        {/* ====== Single Product Info End ====== */}

        {/* ====== Related Product Section Start ====== */}
        <div className="py-20">
          <div className="pb-12">
            <h2 className="text-secondary text-2xl font-semibold font-poppins leading-5 text-center">
              Related Item
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap">
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
                  Havit Gamepad for PS5
                </h3>
                <div className="flex items-start gap-x-3">
                  <h4 className="text-secondary text-base font-medium font-poppins leading-6">
                    $950
                  </h4>
                  <h4 className="text-text text-base font-medium font-poppins leading-6 line-through">
                    $1500
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
                    src={keyboard}
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
                  AK Keyboard for Desktop
                </h3>
                <div className="flex items-start gap-x-3">
                  <h4 className="text-secondary text-base font-medium font-poppins leading-6">
                    $200
                  </h4>
                  <h4 className="text-text text-base font-medium font-poppins leading-6 line-through">
                    $1000
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ====== Related Product Section End ====== */}
      </div>
    </section>
  );
};

export default SingleProduct;
