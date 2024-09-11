"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

//define props type
type Props = {
  openNav: () => void;
};

function Navbar({ openNav }: Props) {
  const [bgNav, setBgNav] = useState<boolean>(false);

  useEffect(() => {
    const navHandler = (): void => {
      if (window.scrollY > 90) {
        setBgNav(true);
      }
      if (window.scrollY < 90) {
        setBgNav(false);
      }
    };
    window.addEventListener("scroll", navHandler);
    return (): void => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        bgNav ? "bg-[#240b39]" : ""
      }  w-full  h-[12vh] z-10 transition-all duration-200`}
    >
      <div className="mx-auto w-[95%] sm:w-[90%] xl:w-[80%] flex items-center justify-between h-full ">
        <Image src={logo} width={170} height={170} alt="LOGO"></Image>
        <div className="flex items-center justify-between space-x-10">
          <div className=" hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => (
              <Link key={navLink.id} href={navLink.url} className="">
                <p className="link_item">{navLink.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-8 py-3 md:px-12 md:py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg ">
              Hire Me
            </button>
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
