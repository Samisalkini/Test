import React from "react";
import { Link } from "react-scroll";
import profileImage from "D://portfolio/src/profile.jpg";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="profile">
        <img src={profileImage} alt="Profile" />

        <h2>Sami Salkini</h2>
        <p>Front-end Developer</p>
      </div>
      <ul>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
