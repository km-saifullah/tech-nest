import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="py-40">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-primary text-[110px] font-inter font-medium leading-[115px] ">
            404 Not Found
          </h1>
          <p className="text-primary text-base font-poppins font-normal leading-6 pt-10 pb-20">
            Your visited page not found. You may go home page.
          </p>
          <Link href={"/"}>
            <button className="btn">Back to home page</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
