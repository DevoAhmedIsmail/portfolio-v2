import React from "react";

import { IoMdArrowDropright } from "react-icons/io";
import aboutData from "../../data/aboutData";

const About = () => {
  
  return (
    <section className="bg-gray-50 dark:bg-[color:var(--secondary)] text-gray-800 dark:text-gray-200 py-8" id="About">
      <div className="container mx-auto px-6 text-">
        <div className="section-header">
          <p>About Me</p>
        </div>

        <div className="mt-5 space-y-2 px-0 md:px-16 text-base md:text-lg">
          {aboutData.map((data,index) => (
            <p className="flex items-start gap-2" key={index} data-aos="fade-up">
              <IoMdArrowDropright className="text-lg mt-1 text-[color:var(--primary)]" />
              <span className="flex-1">{data.text}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
