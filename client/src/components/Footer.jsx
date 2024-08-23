import Link from "next/link";
import { RiSendPlane2Line } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";
import { PiTwitterLogoLight } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import qrcode from "/public/qrcode.png";
import playstore from "/public/playstore.png";
import appstore from "/public/appstore.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container">
        <div className="py-20 flex justify-between">
          <div>
            <h4 className="text-light text-2xl font-inter font-bold leading-6">
              Exclusive
            </h4>
            <h6 className="text-light text-xl font-poppins font-medium leading-7 py-6">
              Subscribe
            </h6>
            <p className="text-light text-base font-poppins font-normal leading-6">
              Get 10% off your first order
            </p>
            <div className="mt-4 px-2 flex items-center justify-center gap-x-4 border border-light rounded">
              <div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="p-3 bg-transparent text-light text-base font-poppins font-normal leading-6 border-none outline-none"
                />
              </div>
              <div className="cursor-pointer">
                <RiSendPlane2Line className="text-light h-6 w-6" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 className="text-light text-xl font-poppins font-medium leading-7 py-6">
                Subscribe
              </h6>
            </div>
            <div className="space-y-4">
              <p className="w-[200px] text-light text-base font-poppins font-normal leading-6">
                222 Victory place, Dhaka, DH 0000, Bangladesh.
              </p>
              <p className="text-light text-base font-poppins font-normal leading-6">
                technest@gmail.com
              </p>
              <p className="text-light text-base font-poppins font-normal leading-6">
                +88015-88888-9999
              </p>
            </div>
          </div>
          <div>
            <div>
              <h6 className="text-light text-xl font-poppins font-medium leading-7 py-6">
                Account
              </h6>
              <ul className="space-y-4">
                <li className="text-light text-base font-poppins font-normal leading-6">
                  <Link href={"/"}>My Account</Link>
                </li>
                <li className="text-light text-base font-poppins font-normal leading-6">
                  <Link href={"/signup"}>Login/Register</Link>
                </li>
                <li className="text-light text-base font-poppins font-normal leading-6">
                  <Link href={"/"}>Cart</Link>
                </li>
                <li className="text-light text-base font-poppins font-normal leading-6">
                  <Link href={"/"}>Wishlist</Link>
                </li>
                <li className="text-light text-base font-poppins font-normal leading-6">
                  <Link href={"/"}>Shop</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h6 className="text-light text-xl font-poppins font-medium leading-7 py-6">
              Quick Link
            </h6>
            <ul className="space-y-4">
              <li className="text-light text-base font-poppins font-normal leading-6">
                <Link href={"/"}>Privacy Policy</Link>
              </li>
              <li className="text-light text-base font-poppins font-normal leading-6">
                <Link href={"/"}>Terms of User</Link>
              </li>
              <li className="text-light text-base font-poppins font-normal leading-6">
                <Link href={"/"}>FAQ</Link>
              </li>
              <li className="text-light text-base font-poppins font-normal leading-6">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h6 className="text-light text-xl font-poppins font-medium leading-7 py-6">
                Download App
              </h6>
            </div>
            <div>
              <p className="text-light text-xs font-poppins font-normal leading-5">
                Save $3 with App New User Only
              </p>
              <div className="flex items-center justify-between gap-2 pt-2 pb-6">
                <div>
                  <Image src={qrcode} alt="QRcode" />
                </div>
                <div className="flex items-center justify-between gap-x-2 gap-y-3 flex-col">
                  <Image src={playstore} alt="google playstore" />
                  <Image src={appstore} alt="apple app store" />
                </div>
              </div>
              <div className="space-x-6 flex items-center justify-center">
                <div className="cursor-pointer">
                  <RiFacebookLine className="text-light h-6 w-6" />
                </div>
                <div className="cursor-pointer">
                  <PiTwitterLogoLight className="text-light h-6 w-6" />
                </div>
                <div className="cursor-pointer">
                  <PiInstagramLogoThin className="text-light h-6 w-6" />
                </div>
                <div className="cursor-pointer">
                  <RiLinkedinLine className="text-light h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-light py-4">
        <div className="container">
          <p className="text-light text-base font-poppins font-normal leading-6 text-center">
            &copy; Copyright KMS {new Date().getFullYear()}. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
