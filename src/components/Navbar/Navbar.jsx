import React from "react";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 left-16 md:left-64 right-0 h-20 py-2 z-50 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="w-40 h-20">
              <img
                src="./images/logo.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          <div className="flex items-center">
            <a
              href="https://drive.google.com/file/d/141hGO34w4kh1IJXIeBuVhtiWiq7ezLZ4/view?usp=share_link"
              className="flex items-center gap-2 text-white bg-[color:var(--primary)] rounded-full px-3 py-2 mr-3 "
              target="_blank"
              download
            >
              <BsDownload className="font-bold" />
              CV
            </a>
            {/* Toggle Dark Mode */}
            <div className="flex md:hidden items-center gap-1 ">
              <MdOutlineLightMode />
              <div>
                <label className="dark-light">
                  <input
                    id="check-top"
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  <span></span>
                  <label htmlFor="check-top" className="shadow"></label>
                </label>
              </div>
              <MdOutlineDarkMode />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
