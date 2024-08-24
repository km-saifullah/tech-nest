import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import lcdMonitor from "/public/lcd_monitor.png";
import gamePad from "/public/gamepad.png";

const Cart = () => {
  return (
    <section className="">
      <div className="container">
        <div className="breadcrumbs text-sm py-20">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/cart"}>Cart</Link>
            </li>
          </ul>
        </div>
        <div className="overflow-x-auto pb-7">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="w-full flex items-start justify-between">
                <th className="w-[20%] text-primary text-base font-poppins font-normal leading-6">
                  Product
                </th>
                <th className="w-[20%] text-primary text-base font-poppins font-normal leading-6">
                  Price
                </th>
                <th className="w-[20%] text-primary text-base font-poppins font-normal leading-6">
                  Quantity
                </th>
                <th className="w-[20%] text-primary text-base font-poppins font-normal leading-6">
                  Subtotal
                </th>
                <th className="w-[20%] text-primary text-base font-poppins font-normal leading-6">
                  Remove Item
                </th>
              </tr>
            </thead>
            <tbody className="space-y-7">
              <tr className="w-full flex items-center justify-center">
                <td className="w-[20%]">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="">
                        <Image
                          src={lcdMonitor}
                          alt="LCD Monitor"
                          className=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-primary text-base font-poppins font-normal leading-6">
                        LCD Monitor
                      </div>
                    </div>
                  </div>
                </td>
                <td className="w-[20%]">
                  <p className="text-primary text-base font-poppins font-normal leading-6">
                    $350
                  </p>
                </td>
                <td className="w-[20%]">
                  <div className="flex items-center justify-center gap-x-3 p-3 border border-border-line rounded w-[72px] h-11">
                    <p className="text-primary text-md font-poppins font-semibold leading-6">
                      01
                    </p>
                    <div>
                      <MdKeyboardArrowUp className="text-xl text-primary cursor-pointer" />
                      <MdKeyboardArrowDown className="text-xl text-primary cursor-pointer" />
                    </div>
                  </div>
                </td>
                <td className="w-[20%]">
                  <p className="text-primary text-base font-poppins font-normal leading-6">
                    $350
                  </p>
                </td>
                <td className="w-[20%]">
                  <div className="px-10">
                    <RxCross2 className="text-secondary text-3xl" />
                  </div>
                </td>
              </tr>
              <tr className="w-full flex items-center justify-center">
                <td className="w-[20%]">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="">
                        <Image src={gamePad} alt="H1 Gamepad" className="" />
                      </div>
                    </div>
                    <div>
                      <div className="text-primary text-base font-poppins font-normal leading-6">
                        LCD Monitor
                      </div>
                    </div>
                  </div>
                </td>
                <td className="w-[20%]">
                  <p className="text-primary text-base font-poppins font-normal leading-6">
                    $350
                  </p>
                </td>
                <td className="w-[20%]">
                  <div className="flex items-center justify-center gap-x-3 p-3 border border-border-line rounded w-[72px] h-11">
                    <p className="text-primary text-md font-poppins font-semibold leading-6">
                      01
                    </p>
                    <div>
                      <MdKeyboardArrowUp className="text-xl text-primary cursor-pointer" />
                      <MdKeyboardArrowDown className="text-xl text-primary cursor-pointer" />
                    </div>
                  </div>
                </td>
                <td className="w-[20%]">
                  <p className="text-primary text-base font-poppins font-normal leading-6">
                    $350
                  </p>
                </td>
                <td className="w-[20%]">
                  <div className="px-10">
                    <RxCross2 className="text-secondary text-3xl" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between pt-6 pb-20">
          <div>
            <button className="btn hover:text-primary hover:bg-transparent">
              Return To Shop
            </button>
          </div>
          <div>
            <button className="btn hover:text-primary hover:bg-transparent">
              Update Cart
            </button>
          </div>
        </div>
        <div className="pb-[140px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <input
                type="text"
                placeholder="Coupon Code"
                className="bg-transparent border border-border-line rounded w-[300px] py-3 px-6 outline-none"
              />
            </div>
            <div>
              <button className="btn hover:text-primary hover:bg-transparent">
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="w-[470px] py-8 px-6 border border-border-line rounded">
            <h4 className="text-primary text-xl font-poppins font-medium leading-6">
              Cart Total
            </h4>
            <div className="flex items-center justify-between pt-6 pb-4 border-b border-border-line">
              <p className="text-primary text-base font-poppins font-normal leading-6">
                Subtotal
              </p>
              <p className="text-primary text-base font-poppins font-normal leading-6">
                $1200
              </p>
            </div>
            <div className="flex items-center justify-between pt-6 pb-4 border-b border-border-line">
              <p className="text-primary text-base font-poppins font-normal leading-6">
                Shipping
              </p>
              <p className="text-primary text-base font-poppins font-normal leading-6">
                $0.05
              </p>
            </div>
            <div className="flex items-center justify-between pt-6 pb-4">
              <p className="text-primary text-base font-poppins font-normal leading-6">
                Total
              </p>
              <p className="text-primary text-base font-poppins font-normal leading-6">
                $1200.05
              </p>
            </div>
            <div className="pt-5 ">
              <button className="btn hover:text-primary hover:bg-transparent">
                Processed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
