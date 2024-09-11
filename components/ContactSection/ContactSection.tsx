import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa6";

function ContactSection() {
  return (
    <div>
      <div className="pt-16 pb-16 bg-[#050709]">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
              <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
                Let's work together!
              </h1>
              <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eabeatae quia excepturi corrupti repellendus. Aliquid!
              </p>
              <form className="mt-8 block w-full overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
                  />
                </div>
                <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
                  />
                </div>
                <div>
                  <select className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none">
                    <option value="null">Select an option</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="fullstack">Fullstack Development</option>
                  </select>
                </div>
                <textarea
                  rows={7}
                  className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
                  placeholder="Message"
                ></textarea>
                <div className="mt-4">
                  <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            className="xl:mx-auto"
          >
            <div>
              <div className="flex items-center space-x-8">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
                  <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl text-white font-bold">
                    Phone
                  </h1>
                  <h1 className="text-base sm:text-lg text-white text-opacity-70">
                    +88(012345 789)
                  </h1>
                </div>
              </div>
              <div className="flex items-center space-x-8 mt-8 mb-8">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
                  <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl text-white font-bold">
                    Email Address
                  </h1>
                  <h1 className="text-base sm:text-lg text-white text-opacity-70">
                    example@gmail.com
                  </h1>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
                  <FaMap className="w-4 h-4 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl text-white font-bold">
                    Address
                  </h1>
                  <h1 className="text-base sm:text-lg text-white text-opacity-70">
                    Dhaka , Bangladesh
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
