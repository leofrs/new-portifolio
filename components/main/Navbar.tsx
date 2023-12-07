import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-around m-auto px-[10px]">
        <div className="w-[500px] h-full flex flex-row items-center justify-around md:mr-20">
          <div className="flex items-center justify-around w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 max-md:gap-3">
            <a href="#about-me" className="cursor-pointer">
              Sobre
            </a>
            <a href="#skills" className="cursor-pointer">
              Habilidades
            </a>
            <a href="#projects" className="cursor-pointer">
              Projetos
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 text-white">
          <a
            href="https://github.com/leofrs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-frsantos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
