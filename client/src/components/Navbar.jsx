import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="pt-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-primary text-2xl font-inter font-bold leading-6 tracking-wide">
              <Link href={"/"}>TechNest</Link>
            </h2>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-x-12">
              <li className="text-primary text-base font-poppins leading-6 active">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-primary text-base font-poppins leading-6">
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li className="text-primary text-base font-poppins leading-6">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="text-primary text-base font-poppins leading-6">
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between gap-x-9">
            <div className="w-[243px] flex items-center justify-between gap-x-8 px-3 py-2 bg-inputBg rounded">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-text font-poppins font-normal leading-[18px] w-[153px]"
              />
              <IoSearchOutline className="h-6 w-6 text-primary cursor-pointer" />
            </div>
            <div className="flex items-center gap-x-4">
              <FaRegHeart className="h-6 w-6 text-primary cursor-pointer" />
              <IoCartOutline className="h-6 w-6 text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;