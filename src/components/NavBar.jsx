import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex">
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
          <NavLink to="/AwardsPage">Awards</NavLink>
        </li> 

        <li>
          <NavLink to="/ContactPage">Contacts</NavLink>
          </li>
          
        <li>
          <NavLink to="/ToDoPage">To-Do</NavLink>
        </li> 
        
      </ul>
    </nav>
  );
};

export default NavBar;