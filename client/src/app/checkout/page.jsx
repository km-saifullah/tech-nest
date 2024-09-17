import Link from "next/link";
import Image from "next/image";
import monitor from "/public/monitor.png";
import visa from "/public/visa.png";
import master from "/public/master.png";
import bkash from "/public/bkash.png";
import nagad from "/public/nagad.png";

const Checkout = () => {
  return (
    <main>
      <div className="container">
        <div className="breadcrumbs text-sm py-20">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link href={"/checkout"}>Checkout</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col">
            <h2 className="main-heading pb-14">Billing Detail</h2>
          </div>
          <div className="flex items-center justify-between">
            {/* ====== Billing Info Section Start ======= */}
            <div>
              <div className="flex flex-col gap-2 pb-9">
                <label
                  htmlFor="firstname"
                  className="text-text text-base font-normal font-poppins leading-6"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-[470px] h-[50px] bg-inputBg text-primary text-base font-normal font-poppins leading-6 border-none outline-none p-4"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 pb-9">
                <label
                  htmlFor="firstname"
                  className="text-text text-base font-normal font-poppins leading-6"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-[470px] h-[50px] bg-inputBg text-primary text-base font-normal font-poppins leading-6 border-none outline-none p-4"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 pb-9">
                <label
                  htmlFor="firstname"
                  className="text-text text-base font-normal font-poppins leading-6"
                >
                  Appartment/Floor/House No.
                </label>
                <input
                  type="text"
                  className="w-[470px] h-[50px] bg-inputBg text-primary text-base font-normal font-poppins leading-6 border-none outline-none p-4"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 pb-9">
                <label
                  htmlFor="firstname"
                  className="text-text text-base font-normal font-poppins leading-6"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  className="w-[470px] h-[50px] bg-inputBg text-primary text-base font-normal font-poppins leading-6 border-none outline-none p-4"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 pb-9">
                <label
                  htmlFor="firstname"
                  className="text-text text-base font-normal font-poppins leading-6"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-[470px] h-[50px] bg-inputBg text-primary text-base font-normal font-poppins leading-6 border-none outline-none p-4"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 pb-9">
                <label
                  htmlFor="firstname"
                  className="text-text text-base font-normal font-poppins leading-6"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  className="w-[470px] h-[50px] bg-inputBg text-primary text-base font-normal font-poppins leading-6 border-none outline-none p-4"
                  required
                />
              </div>
            </div>
            {/* ====== Billing Info Section End ======= */}

            {/* ====== Product Information Start ====== */}
            <div>
              <div className="space-y-8">
                <div className="flex items-center justify-between gap-x-4">
                  <div className="w-[54px] h-[54px] overflow-hidden">
                    <Image
                      src={monitor}
                      alt="product name"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-x-[210px]">
                    <h5 className="text-primary text-base font-normal font-inter leading-6">
                      LCD Monitor
                    </h5>
                    <h5 className="text-primary text-base font-normal font-inter leading-6">
                      $650
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-4">
                  <div className="w-[54px] h-[54px] overflow-hidden">
                    <Image
                      src={monitor}
                      alt="product name"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-x-[210px]">
                    <h5 className="text-primary text-base font-normal font-inter leading-6">
                      LCD Monitor
                    </h5>
                    <h5 className="text-primary text-base font-normal font-inter leading-6">
                      $650
                    </h5>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="flex items-center justify-between border-b pb-5">
                  <p className="text-primary text-base font-normal font-inter leading-6">
                    Subtotal:
                  </p>
                  <p className="text-primary text-base font-medium font-poppins leading-6">
                    $1750
                  </p>
                </div>
                <div className="flex items-center justify-between border-b pb-5">
                  <p className="text-primary text-base font-normal font-inter leading-6">
                    Shipping:
                  </p>
                  <p className="text-primary text-base font-medium font-poppins leading-6">
                    $1750
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-primary text-base font-normal font-inter leading-6">
                    Total:
                  </p>
                  <p className="text-primary text-base font-medium font-poppins leading-6">
                    $1750
                  </p>
                </div>
              </div>
              <div className="space-y-32 pt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <input type="radio" name="payment" className="w-6 h-6" />
                    <label
                      htmlFor="payment"
                      className="text-primary text-base font-normal font-poppins leading-6"
                    >
                      Bank
                    </label>
                  </div>
                  <div className="flex items-center justify-between gap-x-3">
                    <Image src={visa} alt="payment gateway name" />
                    <Image src={master} alt="payment gateway name" />
                    <Image src={bkash} alt="payment gateway name" />
                    <Image src={nagad} alt="payment gateway name" />
                  </div>
                </div>
              </div>
              <div className="space-y-32 pt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <input type="radio" className="w-6 h-6" name="payment" />
                    <label
                      htmlFor=""
                      className="text-primary text-base font-normal font-poppins leading-6"
                    >
                      Cash On Delivery
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-32 pt-8">
                <div className="flex items-center justify-between gap-x-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="px-2 py-2 border border-primary outline-none rounded text-text text-base font-normal font-poppins leading-6"
                    />
                  </div>
                  <div>
                    <button className="btn hover:text-primary hover:bg-white">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-32 pt-8">
                <div className="flex items-center justify-between gap-x-4">
                  <div>
                    <button className="btn hover:text-primary hover:bg-white">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ====== Product Information End ====== */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
