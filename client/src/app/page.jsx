import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import appleLogo from "/public/apple_logo.png";
import iphoneImage from "/public/iphone_image.png";
import Link from "next/link";
import { FlashSale } from "@/components";

export default function Home() {
  return (
    <section className="pt-10 pb-[140px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[20%]">
            <ul className="flex flex-col gap-y-3">
              <li className="flex items-center justify-between">
                <div className="text-base text-primary font-poppins font-normal leading-6">
                  <Link href={"/"}>Pc Components</Link>
                </div>
                <div className="text-base text-primary font-poppins font-normal leading-6 cursor-pointer">
                  <FaAngleRight />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <div className="text-base text-primary font-poppins font-normal leading-6">
                  <Link href={"/"}>Camera Extensions</Link>
                </div>
                <div className="text-base text-primary font-poppins font-normal leading-6 cursor-pointer">
                  <FaAngleRight />
                </div>
              </li>
              <li className="text-base text-primary font-poppins font-normal leading-6">
                <Link href={"/"}>Electronics</Link>
              </li>
              <li className="text-base text-primary font-poppins font-normal leading-6">
                <Link href={"/"}>Laptop</Link>
              </li>
              <li className="text-base text-primary font-poppins font-normal leading-6">
                <Link href={"/"}>Accessories</Link>
              </li>
              <li className="text-base text-primary font-poppins font-normal leading-6">
                <Link href={"/"}>CPU</Link>
              </li>
              <li className="text-base text-primary font-poppins font-normal leading-6">
                <Link href={"/"}>Desk Setup</Link>
              </li>
              <li className="text-base text-primary font-poppins font-normal leading-6">
                <Link href={"/"}>Headphone</Link>
              </li>
            </ul>
          </div>
          <div className="bg-[#000000] w-[70%] p-4 flex items-center justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-x-4">
                <Image src={appleLogo} alt="apple logo" />
                <h5 className="text-base text-light font-poppins font-normal leading-6">
                  iPhone 14 Series
                </h5>
              </div>
              <h1 className="hero-text">Up to 10% off Voucher</h1>
              <button className="cursor-pointer text-light underline text-base font-poppins font-medium">
                <Link href={"/"}>ShopNow</Link>
              </button>
            </div>
            <div>
              <Image
                src={iphoneImage}
                alt="iphone banner image"
                className=" w-[496px]"
              />
            </div>
          </div>
        </div>
        <div className="py-[100px]">
          <FlashSale />
        </div>
      </div>
    </section>
  );
}
