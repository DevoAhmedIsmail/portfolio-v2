import React from "react";
import { FaCertificate } from "react-icons/fa";
import experienceData from "../../data/experinceData";
import "./Experience.css";

const Experience = () => {
  return (
    <section
      className="bg-gray-50 dark:bg-[color:var(--secondary)] text-gray-800 dark:text-gray-200 py-8 relative overflow-x-hidden"
      id="Experience"
    >
      <div className="container mx-auto px-6">
        <div className="section-header">
          <p>Experience</p>
        </div>

        <div className="mt-8">
          <div className="flex flex-col md:grid grid-cols-9">
            {experienceData.map((data, index) =>
              index % 2 === 0 ? (
                <div className="flex flex-row-reverse  md:contents" key={index}>
                  <div className="col-start-1 col-end-5 mr-auto md:mr-0">
                    <div
                      className="border border-gray-100 dark:border-gray-700 rounded-lg shadow-lg my-5 mx-auto max-w-[350px] p-4"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <p className="text-xl font-bold">{data.text}</p>
                      {data.title && <p className="mb-2">at {data.title}</p>}
                      <p className="text-[color:var(--primary)] font-semibold">
                        {data.date}
                      </p>
                      <p>{data.details}</p>
                    </div>
                  </div>
                  <div className="col-start-5 col-end-6 relative mr-3 md:mx-auto">
                    <div className="h-full w-6 flex justify-center items-center">
                      <div className="h-full w-1 bg-gray-300 dark:bg-gray-100"></div>
                    </div>
                    <div className="flex items-center justify-center absolute top-1/2 -mt-3 w-6 h-6 rounded-full shadow bg-[color:var(--primary)] dark:bg-[color:var(--primary)]">
                      <FaCertificate className="text-gray-200" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex md:contents" key={index}>
                  <div className="col-start-5 col-end-6 relative mr-3 md:mx-auto">
                    <div className="h-full w-6 flex justify-center items-center">
                      <div className="h-full w-1 bg-gray-300 dark:bg-gray-100"></div>
                    </div>
                    <div className="flex items-center justify-center absolute top-1/2 -mt-3 w-6 h-6 rounded-full shadow bg-[color:var(--primary)] dark:bg-[color:var(--primary)]">
                      <FaCertificate className="text-gray-200" />
                    </div>
                  </div>
                  <div className="col-start-6 col-end-10">
                    <div
                      className="border border-gray-100 dark:border-gray-700 rounded-lg shadow-lg my-5 mx-auto max-w-[350px] p-4"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                    >
                      <p className="text-xl font-bold">{data.text}</p>
                      {data.title && <p className="mb-2">at {data.title}</p>}

                      <p className="text-[color:var(--primary)] font-semibold">
                        {data.date}
                      </p>
                      <p>{data.details}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
          <li className="bg-[#9b9b9b33] dark:bg-[#ffffff33]"></li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
