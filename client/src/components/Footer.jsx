import Image from "next/image";
import signup_image from "/public/signup_image.png";

const Footer = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Image src={signup_image} alt="Signup image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
