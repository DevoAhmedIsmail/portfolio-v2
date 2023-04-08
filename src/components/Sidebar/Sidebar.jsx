import React from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { FaGraduationCap,FaCrown } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineLightMode, MdOutlineDarkMode,MdOutlineWork } from "react-icons/md";

const Sidebar = ({ toggleDarkMode, darkMode }) => {
  const sidebarLinks = [
    {
      text: "Home",
      icon: <AiOutlineHome className="text-2xl" />,
    },
    {
      text: "About",
      icon: <AiOutlineUser className="text-2xl" />,
    },
    {
      text: "Skills",
      icon: <FaCrown className="text-2xl" />,
    },
    {
      text: "Services",
      icon: <GiAutoRepair className="text-2xl" />,
    },
    {
      text: "Experience",
      icon: <FaGraduationCap className="text-2xl" />,
    },
    {
      text: "Portfolio",
      icon: <MdOutlineWork className="text-2xl" />,
    },
  ];
  
  
  return (
    <div className="sidebar overflow-hidden bg-white dark:bg-[color:var(--secondary)] text-gray-900 dark:text-gray-200 shadow fixed left-0 top-0 h-screen w-[61px] md:w-[250px] hover:w-[200px] md:hover:w-[250px] transition-[width] duration-300 z-[100]">
      <Link to="/">
        <div className="w-32 md:w-40 h-20">
          <img
            src="./images/logo-text.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
      <div className="space-y-3 px-2">
        {sidebarLinks.map((sidebarLink, index) => (
          <a href={`#${sidebarLink.text}`} key={index}>
            <div className="flex  items-center rounded bg-gray-200 dark:bg-gray-500 text-gray-800 dark:text-gray-200 hover:text-[color:var(--primary)] hover:dark:text-[color:var(--primary)] p-2 pl-[11px] text-lg font-semibold mb-3 overflow-hidden transition-[color] duration-200">
              <div className="flex-1 flex items-center gap-3">
                {sidebarLink.icon}
                {sidebarLink.text}
              </div>
              <HiOutlineArrowCircleRight />
            </div>
          </a>
        ))}
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-7 md:gap-3 absolute bottom-[25px] left-0 md:left-[60px] ">
        <MdOutlineLightMode />
        <div className="rotate-90 md:rotate-0">
        <label className="dark-light">
          <input id="check" type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span></span>
          <label htmlFor="check" className="shadow"></label>
        </label>
        </div>
        <MdOutlineDarkMode />
      </div>
    </div>
  );
};

export default Sidebar;
