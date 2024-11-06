import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DateTime from "./DateTime";
import NavBar from "./NavBar";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Emalin
      </a>

      <NavBar/>
      <DateTime/>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about" onClick={handleToggle}>About</a>
          </li>
          <li>
            <a href="/#projects" onClick={handleToggle}>Projects</a>
          </li>
          <li>
            <a href="/#blog" onClick={handleToggle}>Blog</a>
          </li>
          <li>
            <a href="/#contact" onClick={handleToggle}>Contact</a>
          </li>
          <li>
            <a href="/#top" onClick={handleToggle}>Home</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;