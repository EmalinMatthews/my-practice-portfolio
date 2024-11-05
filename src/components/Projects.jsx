import React from "react";
import sunset from "../assets/sunset.png";
import portfolio from "../assets/portfolio.png";
import uilogs from "../assets/sunset.png";

const Projects = () => {
    const projects = [
        {
          img: portfolio,
          title: "portfolio",
          desc: " Create a Portfolio using React and Tailwind CSS ",
          code: "https://github.com/EmalinMatthews/my-practice-portfolio/tree/main",
        },
        {
          img: uilogs,
          title: "uilogs",
          desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
          code: "https://github.com/Coderamrin/html-templates",
        },
        {
          img: sunset,
          title: "sunset image",
          desc: "Frontend Mentor challange directory, solved with vanilla CSS",
          code: "https://github.com/Coderamrin/build-10-css-projects",
        },
      
      ]; 
    

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-white pb-2">
            Projects
          </h2>

          <p className="pb-5">
            I will add some projects below too!
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold" target="_blank" rel="noreferrer" 
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;