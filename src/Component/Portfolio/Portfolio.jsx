import "./Portfolio.css";
import "./responsive.css";
import image from "../Assets/image.png";

import { VscAccount, VscVscode } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

import {
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
} from "react-icons/si";

import {
  FaFolderOpen,
  FaClipboardList,
  FaHandRock,
  FaShoppingCart,
} from "react-icons/fa";

import { FaAddressBook } from "react-icons/fa";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="portfolio">

      <div className="dots"></div>
      <div className="top-circle"></div>
      <div className="bottom-circle"></div>

      {/* Hero Section */}
      <section className="hero">

        <h1>
          <span>Ankita</span> Halder
        </h1>

        <h3>
          MERN STACK DEVELOPER | REACT DEVELOPER
        </h3>

        <div className="line"></div>

        <p>
          Hello! I am a B.Tech student passionate about Frontend
          Development and creating clean, responsive and
          user-friendly websites.
        </p>

      </section>


      {/* About Section */}
      <section className="about">

        <div className="about-left">

          <div className="about-heading">
            <VscAccount className="icon" />
            <h2>ABOUT ME</h2>
          </div>

          <p>
            I am a B.Tech student with a strong interest in web
            development. I enjoy building responsive and visually
            appealing websites. I am constantly learning new
            technologies and improving my skills to become a
            better developer.
          </p>

        </div>

        <div className="about-right">
          <img src={image} alt="About Me" />
        </div>

      </section>


      {/* Education Section */}
      <section className="education">

        <div className="education-left">

          <div className="education-heading">
            <FaGraduationCap className="icon2" />
            <h2>EDUCATION</h2>
          </div>

          <div className="education-details">

            <h3>
              B.Tech in Artificial Intelligence & Data Science
            </h3>

            <p>2023-2027</p>

            <p>
              St. Mary's Technical Campus Kolkata
            </p>

            <p>
              MAKAUT, West Bengal
            </p>

          </div>

        </div>

      </section>


      {/* Skills Section */}
      <section className="skill">

        <div className="skill-left">

          <div className="skill-heading">
            <BiCodeAlt className="icon3" />
            <h2>SKILLS</h2>
          </div>

          <div className="skill-container">

            {/* HTML */}
            <div className="skill-card">
              <FaHtml5 className="skill-icon html" />
              <span>HTML5</span>
            </div>

            {/* CSS */}
            <div className="skill-card">
              <FaCss3Alt className="skill-icon css" />
              <span>CSS3</span>
            </div>

            {/* JavaScript */}
            <div className="skill-card">
              <IoLogoJavascript className="skill-icon js" />
              <span>JavaScript</span>
            </div>

            {/* React */}
            <div className="skill-card">
              <FaReact className="skill-icon react" />
              <span>React.js</span>
            </div>

            {/* Tailwind */}
            <div className="skill-card">
              <SiTailwindcss className="skill-icon" />
              <span>Tailwind CSS</span>
            </div>

            {/* Bootstrap */}
            <div className="skill-card">
              <SiBootstrap className="skill-icon" />
              <span>Bootstrap</span>
            </div>

            {/* Node */}
            <div className="skill-card">
              <SiNodedotjs className="skill-icon" />
              <span>Node.js</span>
            </div>

            {/* Express */}
            <div className="skill-card">
              <SiExpress className="skill-icon" />
              <span>Express.js</span>
            </div>

            {/* MongoDB */}
            <div className="skill-card">
              <SiMongodb className="skill-icon" />
              <span>MongoDB</span>
            </div>

            {/* MySQL */}
            <div className="skill-card">
              <SiMysql className="skill-icon sql" />
              <span>MySQL</span>
            </div>

            {/* REST API */}
            <div className="skill-card">
              <SiPostman className="skill-icon" />
              <span>REST APIs</span>
            </div>

            {/* Java */}
            <div className="skill-card">
              <FaJava className="skill-icon java" />
              <span>Java</span>
            </div>

            {/* Git */}
            <div className="skill-card">
              <FaGitAlt className="skill-icon git" />
              <span>Git</span>
            </div>

            {/* GitHub */}
            <div className="skill-card">
              <FaGithub className="skill-icon github" />
              <span>GitHub</span>
            </div>

            {/* VS Code */}
            <div className="skill-card">
              <VscVscode className="skill-icon vscode" />
              <span>VS Code</span>
            </div>


            {/* Communication */}
            <div className="skill-card">
                <FaComments className="skill-icon" />
                <span>Communication</span>
            </div>

          </div>

        </div>

      </section>


      {/* Projects Section */}
      <section className="projects">

        <div className="project-heading">
          <FaFolderOpen className="icon4" />
          <h2>PROJECTS</h2>
        </div>

        <div className="project-container">

          {/* Project 1 */}

          <a
          href="https://country-explorer-2025.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          >
          <div className="project-card">
            <FaReact className="project-icon" />

            <h3>
              Country Explorer
            </h3>

            <p>
                 A responsive web application that allows users to explore countries
                 and view useful information about different countries through an
                 interactive and user-friendly interface
              
            </p>
          </div>
          </a>


          {/* Project 2 */}
          <a
          href="https://codeveda-client.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          >
          <div className="project-card">
            <FaReact className="project-icon" />

            <h3>
              MERN Stack Admin Dashboard
            </h3>

            <p>
              A full-stack admin dashboard built with React,
              Node.js, Express.js and MongoDB featuring
              authentication, user management, CRUD operations
              and REST APIs.
            </p>
          </div>
          </a>


          {/* Project 3 */}
          <a
          href="https://icoder-website-bootstrap-2505.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          >
          <div className="project-card">
            <FaShoppingCart className="project-icon" />

            <h3>
              iCoder Website
            </h3>

            <p>
                A responsive website built using HTML, CSS and Bootstrap,
                featuring a clean layout and responsive design for different
                screen sizes.

            </p>
          </div>
          </a>


          {/* Project 4 */}
          <a
          href="https://restaurant-tailwind-2025.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          >
          <div className="project-card">
            <FaShoppingCart className="project-icon" />

            <h3>
              Restaurant Web Application
            </h3>

            <p>
              A responsive restaurant web application developed
              using React, Tailwind CSS and JavaScript with a
              modern menu-based interface.
            </p>
          </div>
          </a>


          {/* Project 5 */}
          <a
          href="https://todolist-react-2025.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          >
          <div className="project-card">
            <FaClipboardList className="project-icon" />

            <h3>
              To-Do List
            </h3>

            <p>
              A React-based task management application that
              allows users to organize and manage daily tasks
              through a simple interface.
            </p>
          </div>
          </a>


          {/* Project 6 */}
          <a
          href="https://currencyconverter-2025.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          >
          <div className="project-card">
            <FaHandRock className="project-icon" />

            <h3>
              Currency Converter
            </h3>

            <p>
                A responsive currency converter built with React
                that allows users to convert values between different
                currencies through a simple and user-friendly interface.

            </p>
          </div>
          </a>

        </div>

      </section>


      {/* Contact Section */}
      <section className="contact">

        <div className="contact-heading">
          <FaAddressBook className="icon5" />
          <h2>CONTACT</h2>
        </div>

        <div className="contact-container">

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <p>ankitahalder990@gmail.com</p>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <p>West Bengal, India</p>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <p>+91-7908473069</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Portfolio;