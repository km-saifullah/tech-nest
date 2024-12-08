"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import config from "@/config/config";
import gamepad from "/public/usb_gamepad.png";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productsUrl = `${config.baseUrl}/products`;
    try {
      const response = await axios.get(productsUrl);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="py-6">
          <div className="bg-productBanner w-full h-[316px] bg-no-repeat bg-cover bg-center"></div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-4 py-6">
          {products?.data?.products?.map((item) => (
            <div
              key={item.slug}
              className="bg-inputBg w-[250px] p-5 rounded-md"
            >
              <div className="w-[200px] h-[160px] overflow-hidden flex items-center justify-center">
                <Image
                  src={item.thumbnail.thumnailImage || gamepad}
                  alt="product name"
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="space-y-1 pt-2">
                <h2 className="text-base text-primary font-bold font-inter leading-6">
                  {item.title}
                </h2>
                <p className="text-text text-sm font-poppins font-normal leading-6">
                  Premium quality
                </p>
                <h3 className="text-secondary font-semibold font-poppins text-base leading-6">
                  {item?.inventory[0]?.sellingPrice} BDT
                </h3>
                <div>
                  <button className="bg-secondary text-white text-base font-poppins font-normal leading-6 px-4 py-2 rounded">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-5 pb-9">
          <div className="join">
            <button className="join-item btn hover:bg-primary hover:text-white">
              1
            </button>
            <button className="join-item btn btn-active hover:bg-primary hover:text-white">
              2
            </button>
            <button className="join-item btn hover:bg-primary hover:text-white">
              3
            </button>
            <button className="join-item btn hover:bg-primary hover:text-white">
              4
            </button>
            <button className="join-item btn hover:bg-primary hover:text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
