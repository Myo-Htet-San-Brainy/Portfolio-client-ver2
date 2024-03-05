import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import GradientText from "./GradientText";

const Navbar = () => {
  return (
    <div className="px-10">
      <div className="lg:hidden text-center py-6 italic text-3xl ">
        <GradientText text={"Brainy"} />
      </div>
      <div className="hidden lg:flex items-center">
        <div className="mr-12 text-3xl italic">
          <GradientText text={"Brainy"} />
        </div>
        <div className="flex mr-auto space-x-7 font-bold text-black text-sm ">
          <div className="py-8 hover:shadow-bottom  transition-all duration-200">
            <a
              href=""
              className="hover:text-blue-400 transition-all duration-200 "
            >
              About Me
            </a>
          </div>
          <div className="py-8 hover:shadow-bottom  transition-all duration-200">
            <a
              href=""
              className="hover:text-blue-400 transition-all duration-200 "
            >
              Projects
            </a>
          </div>
          <div className="py-8 hover:shadow-bottom  transition-all duration-200">
            <a
              href=""
              className="hover:text-blue-400 transition-all duration-200 "
            >
              Articles
            </a>
          </div>
        </div>
        <div className="flex space-x-7 text-sm font-bold">
          <a
            href="mailto:myohtetsandrinksmilk@gmail.com"
            className="text-blue-400 hover:text-orange-400 transition-all duration-200"
          >
            myohtetsandrinksmilk@gmail.com
          </a>

          <a
            href="tel:+66994765425"
            className=" text-orange-400 hover:text-blue-400 transition-all duration-200"
          >
            +66994765425
          </a>
        </div>
        <div className="mx-9">|</div>
        <div className="flex space-x-7  text-xl text-black">
          <a
            href=""
            className="hover:text-blue-400 transition-all duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href=""
            className="hover:text-blue-400 transition-all duration-200"
          >
            <FaGithub />
          </a>
          <a
            href=""
            className="hover:text-blue-400 transition-all duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;