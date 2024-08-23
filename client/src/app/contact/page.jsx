import { HiOutlinePhone } from "react-icons/hi2";
import { GoMail } from "react-icons/go";

const Contact = () => {
  return (
    <section className="pt-20 pb-28">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-secondary h-10 w-10 rounded-full flex items-center justify-center text-light font-bold text-xl">
                <HiOutlinePhone />
              </div>
              <h6 className="text-primary text-base font-poppins font-medium leading-6">
                Call To Us
              </h6>
            </div>
            <div className="pt-6 pb-8 space-y-4">
              <p className="text-primary text-[14px] font-poppins font-normal leading-[21px]">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-primary text-[14px] font-poppins font-normal leading-[21px]">
                Phone: +8801611112222
              </p>
            </div>
            <div className="flex items-center gap-3 border-t-2 border-border-line pt-4">
              <div className="bg-secondary h-10 w-10 rounded-full flex items-center justify-center text-light font-bold text-xl">
                <GoMail />
              </div>
              <h6 className="text-primary text-base font-poppins font-medium leading-6">
                Write To Us
              </h6>
            </div>
            <div className="pt-6 pb-8 space-y-4">
              <p className="text-primary text-[14px] font-poppins font-normal leading-[21px]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-primary text-[14px] font-poppins font-normal leading-[21px]">
                Emails: customer@technest.com
              </p>
              <p className="text-primary text-[14px] font-poppins font-normal leading-[21px]">
                Emails: support@technest.com
              </p>
            </div>
          </div>
          <div>
            <form action="">
              <div className="flex items-center gap-x-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-inputBg py-3 px-4 rounded text-text font-normal font-poppins text-base leading-6 outline-none border-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="bg-inputBg py-3 px-4 rounded text-text font-normal font-poppins text-base leading-6 outline-none border-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="bg-inputBg py-3 px-4 rounded text-text font-normal font-poppins text-base leading-6 outline-none border-none"
                  />
                </div>
              </div>
              <div className="py-8">
                <textarea
                  name=""
                  id=""
                  placeholder="Your Message"
                  rows={8}
                  className="w-[737px] bg-inputBg py-3 px-4 rounded text-text font-normal font-poppins text-base leading-6 outline-none border-none"
                ></textarea>
              </div>
              <div className="flex items-end justify-end">
                <button className="btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
