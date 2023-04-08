import React from "react";
import "./Portfolio.css";
import {BiLinkExternal} from 'react-icons/bi'
import { Link } from "react-router-dom";
import PortfolioData from "../../data/PortfolioData";

const Portfolio = () => {
  
  return (
    <section
      className="bg-gray-50 dark:bg-[color:var(--secondary)] text-gray-800 dark:text-gray-200 py-8 relative"
      id="Portfolio"
    >
      <div className="container mx-auto px-6">
        <div className="section-header">
          <p>Portfolio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {
                PortfolioData.map((project,index)=>(

                <div className="border border-gray-100 dark:border-gray-700 h-64 p-5 shadow rounded" key={index} data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                    <div className="overflow-hidden h-full img-container relative group">
                    <img src={project.image} />

                    {/* Overlay */}
                    <div className="absolute -top-14 left-0 w-full group-hover:top-0 group-hover:h-full transition-all duration-200 flex items-center justify-center">
                        <Link to={project.url} target="_blank">
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"></div>
                        <div className="z-20 relative text-[color:var(--primary)]">
                            <BiLinkExternal className="text-center mx-auto"/>
                            <p className="font-semibold text-xl ">{project.name}</p>
                        </div>
                        </Link>
                    </div>
                    </div>
                </div>
                ))
            }

          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
