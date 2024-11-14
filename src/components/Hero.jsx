import React from "react";
import HeroImg from "../assets/hero-img2.png";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineSpotify,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I'm <span className="text-accent">Em</span>alin, <br />
            Software Engineer
          </h1>

          <p className="py-5">
            I am currently learning React and TailwindCSS
          </p>

          <div className="flex py-5 ">
            <a
              href="https://twitter.com"
              className="pr-4 inline-block text-accent hover:text-white" target="_blank" rel="noreferrer" 
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com"
              className="pr-4 inline-block text-accent hover:text-white" target="_blank" rel="noreferrer" 
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com"
              className="pr-4 inline-block text-accent hover:text-white" target="_blank" rel="noreferrer" 
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
            <a
              href="https://www.spotify.com/"
              className="pr-4 inline-block text-accent hover:text-white" target="_blank" rel="noreferrer" 
            >
              {" "}
              <AiOutlineSpotify size={40} />{" "}
            </a>
          </div>

          <a
            href="/ProjectsPage"
            className=" btn bg-accent  border-2 border-[#fef8ea] text-white px-20 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img2 mt-8">
          <img
            src={HeroImg}
            alt="coding illustration"
            width="400" height="200"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
