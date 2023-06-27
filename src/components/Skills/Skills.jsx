import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      name: "Html",
      image: "./images/skills/html-5.png",
    },
    {
      name: "Css",
      image: "./images/skills/css-3.png",
    },
    {
      name: "Bootstrap",
      image: "./images/skills/bootstrap.png",
    },
    {
      name: "Tailwind css",
      image: "./images/skills/tailwindcss.png",
    },
    {
      name: "Javascript",
      image: "./images/skills/js.png",
    },
    {
      name: "React js",
      image: "./images/skills/science.png",
    },
    {
      name: "Next js",
      image: "./images/skills/next.png",
    },
    {
      name: "Redux js",
      image: "./images/skills/redux.svg",
    },
    {
      name: "Json",
      image: "./images/skills/json.png",
    },
    {
      name: "Axios",
      image: "./images/skills/axios.webp",
    },
  ];

  return (
    <section
      className="bg-gray-50 dark:bg-[color:var(--secondary)] text-gray-800 dark:text-gray-200 py-8 relative"
      id="Skills"
    >
      {/* Overlay */}
      <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-800 opacity-50 z-0"></div>

      <div className="container mx-auto px-6">
        <div className="section-header">
          <p>Skills</p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mt-8 z-10 relative">
          {skillsData.map((skill, index) => (
            <div
              className="py-5 bg-gray-200 dark:bg-gray-500 hover:bg-[color:var(--primary)] hover:text-white dark:hover:bg-[color:var(--primary)] rounded transition-all duration-200"
              key={index}
              data-aos="flip-down"
              data-aos-duration="1000"
            >
              <div className="w-full h-32 ">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center font-semibold text-xl mt-3">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
