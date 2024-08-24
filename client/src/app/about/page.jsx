import Image from "next/image";
import { FaShoppingBasket } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import aboutBanner from "/public/about_banner.jpg";
import team1 from "/public/team-1.png";
import team2 from "/public/team-2.png";
import team3 from "/public/team-3.png";

const About = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex items-center justify-between gap-x-16">
          <div className="w-[525px] space-y-8">
            <h2 className="main-heading">Our Story</h2>
            <p className="text-primary text-base font-normal font-poppins leading-6">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region. <br />
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="w-[735px] h-[609px]">
            <Image
              className="h-full w-full object-cover rounded"
              src={aboutBanner}
              alt="About banner image"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pt-36">
          <div className="w-[275px]">
            <div className="text-primary border border-border-line py-7 px-9 flex items-center justify-center flex-col space-y-4 rounded group hover:about-card bg-transparent hover:bg-secondary transition-all duration-300">
              <div className="p-3 bg-primary group-hover:bg-light rounded-full">
                <FaShoppingBasket className="w-10 h-10 text-light group-hover:text-primary" />
              </div>
              <h3 className="text-3xl font-inter font-bold leading-7">10.5k</h3>
              <p className="text-sm font-poppins font-normal leading-5">
                Sallers active our site
              </p>
            </div>
          </div>
          <div className="w-[275px]">
            <div className="text-primary border border-border-line py-7 px-9 flex items-center justify-center flex-col space-y-4 rounded group hover:about-card bg-transparent hover:bg-secondary transition-all duration-300">
              <div className="p-3 bg-primary group-hover:bg-light rounded-full">
                <FiDollarSign className="w-10 h-10 text-light group-hover:text-primary" />
              </div>
              <h3 className="text-3xl font-inter font-bold leading-7">33k</h3>
              <p className="text-sm font-poppins font-normal leading-5">
                Montly Product Sale
              </p>
            </div>
          </div>
          <div className="w-[275px]">
            <div className="text-primary border border-border-line py-7 px-9 flex items-center justify-center flex-col space-y-4 rounded group hover:about-card bg-transparent hover:bg-secondary transition-all duration-300">
              <div className="p-3 bg-primary group-hover:bg-light rounded-full">
                <IoIosPeople className="w-10 h-10 text-light group-hover:text-primary" />
              </div>
              <h3 className="text-3xl font-inter font-bold leading-7">45.5k</h3>
              <p className="text-sm font-poppins font-normal leading-5">
                Customer action in our site
              </p>
            </div>
          </div>
          <div className="w-[275px]">
            <div className="text-primary border border-border-line py-7 px-9 flex items-center justify-center flex-col space-y-4 rounded group hover:about-card bg-transparent hover:bg-secondary transition-all duration-300">
              <div className="p-3 bg-primary group-hover:bg-light rounded-full">
                <TbMoneybag className="w-10 h-10 text-light group-hover:text-primary" />
              </div>
              <h3 className="text-3xl font-inter font-bold leading-7">25k</h3>
              <p className="text-sm font-poppins font-normal leading-5">
                Anual gross sale in our site
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-20 pb-16">
          <div>
            <div className="w-[236px] h-[391px] rounded">
              <Image
                src={team1}
                alt="team member one"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pt-6 space-y-2">
              <h4 className="text-primary text-3xl font-inter font-bold leading-8">
                Scarlet Johnson
              </h4>
              <p className="text-primary text-sm font-normal font-poppins leading-6">
                Founder & Chairman
              </p>
            </div>
          </div>
          <div>
            <div className="w-[236px] h-[391px] rounded">
              <Image
                src={team2}
                alt="team member one"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pt-6 space-y-2">
              <h4 className="text-primary text-3xl font-inter font-bold leading-8">
                Taylor Swift
              </h4>
              <p className="text-primary text-sm font-normal font-poppins leading-6">
                Managing Director
              </p>
            </div>
          </div>
          <div>
            <div className="w-[236px] h-[391px] rounded">
              <Image
                src={team3}
                alt="team member one"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pt-6 space-y-2">
              <h4 className="text-primary text-3xl font-inter font-bold leading-8">
                John Cena
              </h4>
              <p className="text-primary text-sm font-normal font-poppins leading-6">
                Product Designer
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-primary text-light rounded-full h-12 w-12 flex items-center justify-center">
              <TbTruckDelivery className="text-2xl" />
            </div>
            <div className="space-y-2 pt-6">
              <h4 className="text-primary text-xl font-poppins font-semibold leading-7">
                FREE AND FAST DELIVERY
              </h4>
              <p className="text-primary text-base font-inter font-medium leading-5">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col pt-10">
            <div className="bg-primary text-light rounded-full h-12 w-12 flex items-center justify-center">
              <RiCustomerService2Line className="text-2xl" />
            </div>
            <div className="space-y-2 pt-6">
              <h4 className="text-primary text-xl font-poppins font-semibold leading-7">
                F24/7 CUSTOMER SERVICE
              </h4>
              <p className="text-primary text-base font-inter font-medium leading-5">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="bg-primary text-light rounded-full h-12 w-12 flex items-center justify-center">
              <SiAdguard className="text-2xl" />
            </div>
            <div className="space-y-2 pt-6">
              <h4 className="text-primary text-xl font-poppins font-semibold leading-7">
                MONEY BACK GUARANTEE
              </h4>
              <p className="text-primary text-base font-inter font-medium leading-5">
                We reurn money within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
