import "./Portfolio.css";
import "./responsive.css";
import image from "../Assets/image.png";
import { VscAccount } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaFolderOpen,
  FaClipboardList,
  FaHandRock,
  FaAmazon,
  FaShoppingCart,
  FaGamepad,
  FaMoneyBillWave,
} from "react-icons/fa";

import { FaAddressBook } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="dots"></div>
        <div className="top-circle"></div>
        <div className="bottom-circle"></div>

      {/* Hero Section */}
      <section className="hero">

        <h1>
        <span> Ankita </span> Halder
        </h1>

        <h3>
          FRONTEND DEVELOPER | REACT DEVELOPER
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

      <section className="education">
        <div className="education-left">
            <div className="education-heading">
               <FaGraduationCap className="icon2" />
               <h2>EDUCATION</h2> 
            </div>
              <div className="education-details">
              <h3>B.Tech in Artificial Intelligence & Data Science</h3>
                
                <p>2023-2027</p>
                
                <p>St. Mary's Technical Campus Kolkata</p>
                
                <p>MAKAUT, West Bengal</p>
            </div>

            
        </div>
        
      </section>
      <section className="skill">
        <div className="skill-left">
            <div className="skill-heading">
                <BiCodeAlt  className="icon3"/>
                <h2>SKILLS</h2>
                </div>
                <div className="skill-container">
                    <div className="skill-card">
                        <FaHtml5 className="skill-icon html" />
                        <span>HTML</span>
                    </div>
                    <div className="skill-card">
                       <FaCss3Alt className="skill-icon css" />
                        <span>CSS</span>
                    </div>
                    <div className="skill-card">
                       < IoLogoJavascript className="skill-icon js " />
                        <span>JavaScript</span>
                    </div>
                    <div className="skill-card">
                       < FaReact className="skill-icon react" />
                        <span>React</span>
                    </div>
                    <div className="skill-card">
                       <FaJava  className="skill-icon java" />
                        <span>Java</span>
                    </div>
                    <div className="skill-card">
                       < FaPython className="skill-icon python" />
                        <span>Python</span>
                    </div>
                     <div className="skill-card">
                       < FaGitAlt className="skill-icon git" />
                        <span>Git</span>
                    </div>
                     <div className="skill-card">
                       < FaGithub className="skill-icon github" />
                        <span>Github</span>
                    </div>
                     <div className="skill-card">
                       <SiMysql className="skill-icon sql" />
                       <span>SQL</span>
                    </div>
                      <div className="skill-card">
                       <VscVscode className="skill-icon vscode" />
                       <span>VS Code</span>
                    </div>

                </div>
        </div>
        </section>

        <section className="projects">

    <div className="project-heading">
        <FaFolderOpen className="icon4" />
        <h2>PROJECTS</h2>
    </div>

    <div className="project-container">

        <div className="project-card">
            <FaClipboardList className="project-icon" />
            <h3>To-Do List</h3>
            <p>
                A simple and efficient To-Do List application built using React for task management.
            </p>
        </div>

        <div className="project-card">
            <FaHandRock className="project-icon" />
            <h3>Rock Paper Scissors</h3>
            <p>
                An interactive React game where users compete against the computer.
            </p>
        </div>

        <div className="project-card">
            <FaAmazon className="project-icon" />
            <h3>Amazon Clone</h3>
            <p>
                A responsive Amazon homepage clone created using HTML and CSS.
            </p>
        </div>

        <div className="project-card">
            <FaShoppingCart className="project-icon" />
            <h3>Flipkart Clone</h3>
            <p>
                A responsive Flipkart homepage developed with HTML, CSS and JavaScript.
            </p>
        </div>

        <div className="project-card">
            <FaGamepad className="project-icon" />
            <h3>Tic Tac Toe</h3>
            <p>
                A classic Tic Tac Toe game built using React with interactive gameplay.
            </p>
        </div>

        <div className="project-card">
            <FaMoneyBillWave className="project-icon" />
            <h3>Currency Converter</h3>
            <p>
                A currency converter using HTML, CSS and JavaScript with real-time conversion.
            </p>
        </div>

    </div>

       </section>


{/* Contact Section */}

      <section className="contact">

    <div className="contact-heading">
        <FaAddressBook className="icon5"/>
        <h2>CONTACT</h2>
    </div>

    <div className="contact-container">

        <div className="contact-card">
            <FaEnvelope className="contact-icon"/>
            <p>ankitahalder990@gmail.com</p>
        </div>

        <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon"/>
            <p>West Bengal, India</p>
        </div>

        <div className="contact-card">
            <FaPhoneAlt className="contact-icon"/>
            <p>+91-7908473069</p>
        </div>

    </div>

</section>

</div>
  
);
};

export default Portfolio;