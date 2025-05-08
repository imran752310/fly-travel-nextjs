import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

const Navbar = () => {
  return (
    <div>
      <div className="transition-all duration-200 h-[18vh] z-[1000] fixed w-full ">
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[90%] mx-auto border-b border-white">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <div className=" rounded-full flex items-center justify-center flex-col ">
              <Image
                src={"/images/logo.png"}
                width={200}
                height={300}
                alt="logo"
              />
            </div>
          </div>
        <div className="flex gap-4" >
             {/* Navlinks */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              return (
                <Link href={link.url} key={link.id}>
                  <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
                    {link.label}
                  </p>
                </Link>
              );
            })}
          </div>
          {/* button  */}
          <div className="flex items-center space-x-4 ">
            <button className="hidden lg:block xl:block   py-3 px-6 cursor-pointer text-white text-base bg-[#5484dd] hover:bg-gray-500 transition-all duration-200 ">
              Book Now
            </button>

            {/* burger Menu  */}
            <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
