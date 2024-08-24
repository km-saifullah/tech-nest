import Link from "next/link";

const Header = () => {
  return (
    <header className="py-3 bg-primary">
      <div className="container">
        <div className="flex items-end justify-between ">
          <div className="flex items-center justify-center gap-x-2">
            <p className="text-light font-normal leading-[21px] text-[14px] font-poppins">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link
              href={"#"}
              className="text-light font-semibold leading-6 text-[14px] font-poppins underline"
            >
              ShopNow
            </Link>
          </div>
          <div>
            <select
              name="English"
              id=""
              className="bg-primary border-none border-transparent text-light px-3 outline-none outline-transparent text-[14px] font-normal font-poppins leading-[21px]"
            >
              <option>English</option>
              <option>Bangla</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
