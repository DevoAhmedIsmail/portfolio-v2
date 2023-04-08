import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
  BsDownload,
} from "react-icons/bs";

import {BiPhoneCall} from "react-icons/bi"

const Header = () => {
  return (
    <header
      className="min-h-screen md:h-screen bg-gray-50 dark:bg-[color:var(--secondary)] text-gray-800 dark:text-gray-200 pt-12 md:pt-20 py-5 relative"
      id="Home"
    >
      <div className="container mx-auto px-6">
        <div className=" md:h-auto flex justify-between md:justify-center items-center flex-col">
          <div className="bg-photo relative w-64 h-64 rounded-full shadow">
            <img
              src="./images/photo.jpg"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-3xl md:text-4xl font-bold tracking-wide text-center mt-10">
            <p>
              I'm{" "}
              <span className="text-4xl md:text-5xl text-[color:var(--primary)]">
                Ahmed Ismail Ali
              </span>
            </p>
            <p>Front-end Developer (React js)</p>
          </div>
          
          <div className="mt-8 pb-12 flex items-center justify-center gap-5">
            <a
              href="https://drive.google.com/file/d/141hGO34w4kh1IJXIeBuVhtiWiq7ezLZ4/view?usp=share_link"
              className="group relative w-[100px] h-10 flex items-center text-gray-200 bg-[color:var(--primary)] hover:bg-[color:var(--primary-dark)] rounded overflow-hidden transition-all duration-300"
              target="_blank"
            >
              <p className="translate-x-[22px] group-hover:text-transparent transition-all duration-300">CV</p>
              <p className="absolute translate-x-[59px] h-full w-[41px] bg-[color:var(--primary-dark)] flex items-center justify-center group-hover:w-[98px] group-hover:translate-x-[0] transition-all duration-300">
                <BsDownload className="w-[20px]" />
              </p>
            </a>

            <a
              href="tel:+201092071919"
              className="group relative w-[180px] h-10 flex items-center text-gray-200 bg-[color:var(--primary)] hover:bg-[color:var(--primary-dark)] rounded overflow-hidden transition-all duration-300"
            >
              <p className="translate-x-[22px] group-hover:text-transparent transition-all duration-300">+201092071919</p>
              <p className="absolute translate-x-[140px] h-full w-[41px] bg-[color:var(--primary-dark)] flex items-center justify-center group-hover:w-[178px] group-hover:translate-x-[0] transition-all duration-300">
                <BiPhoneCall className="w-[20px]" />
              </p>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="absolute bottom-5 w-full md:w-auto md:bottom-16 right-0 md:right-12 flex justify-center items-center flex-row md:flex-col space-x-3 md:space-x-0 space-y-0 md:space-y-3">
          <div className="hidden md:block bg-[color:var(--primary)] w-1 h-24"></div>
          <Link
            to="https://www.facebook.com/profile.php?id=100011471287921"
            target="_blank"
          >
            <BsFacebook className="text-3xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/devo-ahmed-ismail/"
            target="_blank"
          >
            <BsLinkedin className="text-3xl" />
          </Link>
          <Link to="https://github.com/DevoAhmedIsmail" target="_blank">
            <BsGithub className="text-3xl" />
          </Link>
          <Link to="https://wa.me/201092071919" target="_blank">
            <BsWhatsapp className="text-3xl" />
          </Link>
        </div>

        {/* Scroll Down */}
        <div className="scroll absolute bottom-10 left-1/2 hidden md:block"></div>
      </div>
    </header>
  );
};

export default Header;
