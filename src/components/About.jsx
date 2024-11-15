import React from "react";
import giraffe from "../assets/giraffe-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white py-32"  id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi my name Is Emalin, I am Junior Software Engineer, 
            with a passion for Frontend Development
          </p>
          <p className="pb-5">
          I am creating this portfolio to both help me learn 
          and to showcase any projects I have worked on
          </p>

          <p className="pb-5">I am creating this portfolio using React and Tailwind Css</p>

          <p>
          This is all currently a work in progress, i will be updating regularly!
          </p>
        </div>

        <div>
          <img
            src={giraffe}
            width={500} height={500}
            alt="a giraffe at a laptop"
            align="right"
            
          />
        </div>
      </div>
    </section>
  );
};

export default About;