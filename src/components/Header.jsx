import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DateTime from "./DateTime";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Em
      </a>

      <NavBar/>
      <DateTime/>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
        <li>
          <NavLink to="/#HomePage">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/AboutPage">About</NavLink>
        </li>
        <li>
          <NavLink to="/ProjectsPage">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/BlogPage">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/ContactPage">Contacts</NavLink>
        </li> 
        <li>
          <NavLink to="/ToDoPage">To-Do</NavLink>
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