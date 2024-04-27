// import modules/packages
import React from "react";
import "./Projects.css";

// import icons
import { ImProfile } from "react-icons/im";
import { AiTwotoneShop, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { HiUserGroup, HiMiniBugAnt } from "react-icons/hi2";
import { SiAwsorganizations } from "react-icons/si";
import { MdDashboard, MdSchool } from "react-icons/md";
import { TbMovie } from "react-icons/tb";

// Projects component
const Projects: React.FC = () => {
  return (
    <div id="projects">
      <div id="projects-container">
        <h3 id="projects-header">Projects</h3>
        <div id="projects-card-container">
          <div className="project-card">
            <div className="project-card-icon-container">
              <ImProfile className="project-card-icon" />
            </div>
            <div className="project-card-info">
              <h4 className="project-card-header">
                <a href="" className="project-card-header-link">
                  Portfolios
                </a>
              </h4>
              <p className="project-card-text">
                Create a stunning portfolio website that showcases your talents
                and accomplishments, leaving a lasting impression on visitors.
              </p>
              <ol className="project-card-list">
                <li className="project-card-list-item">
                  <a
                    href="https://joshuapsiyamev4.netlify.app"
                    target="blank"
                    className="project-card-list-item-link"
                  >
                    sample projects
                  </a>
                </li>
                <li className="project-card-list-item">
                  <a href="" className="project-card-list-item-link">
                    Get One
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-icon-container">
              <AiTwotoneShop className="project-card-icon" />
            </div>
            <div className="project-card-info">
              <h4 className="project-card-header">
                <a href="" target="blank" className="project-card-header-link">
                  E-commerce
                </a>
              </h4>
              <p className="project-card-text">
                Create a stunning e-commerce website that showcases your
                products and services, leaving a lasting impression on visitors.
              </p>
              <ol className="project-card-list">
                <li className="project-card-list-item">
                  <a
                    href="https://youthoutfitstudio.netlify.app"
                    target="_blank"
                    className="project-card-list-item-link"
                  >
                    sample projects
                  </a>
                </li>
                <li className="project-card-list-item">
                  <a href="" className="project-card-list-item-link">
                    Get One
                  </a>
                </li>
              </ol>
            </div>
          </div>
          {/* <div className='project-card'>
                        <div className='project-card-icon-container'>
                            <HiMiniBugAnt className='project-card-icon' />
                        </div>
                        <div className='project-card-info'>
                            <h4 className='project-card-header'>
                                <a href='' className='project-card-header-link'>Web scrappers</a>
                            </h4>
                            <p className='project-card-text'>
                                A MERN stack web scrapper application development with Puppeteer for headless
                                browser automation, enabling data extraction and storage from websites.
                            </p>
                            <ol className='project-card-list'>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>sample projects</a>
                                </li>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Get One</a>
                                </li>
                            </ol>
                        </div>
                    </div> */}
          <div className="project-card">
            <div className="project-card-icon-container">
              <TbMovie className="project-card-icon" />
            </div>
            <div className="project-card-info">
              <h4 className="project-card-header">
                <a
                  href="https://thenetfleex.netlify.app/"
                  target="blank"
                  className="project-card-header-link"
                >
                  Movie Download Site
                </a>
              </h4>
              <p className="project-card-text">
                A MERN stack web application for entertainment purpose where any
                one can find favorite, trending, latest movies and tv-shows.
              </p>
              <ol className="project-card-list">
                <li className="project-card-list-item">
                  <a
                    href="https://thenetfleex.netlify.app/"
                    target="blank"
                    className="project-card-list-item-link"
                  >
                    sample projects
                  </a>
                </li>
                {/* <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Get One</a>
                                </li> */}
              </ol>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-icon-container">
              <MdDashboard className="project-card-icon" />
            </div>
            <div className="project-card-info">
              <h4 className="project-card-header">
                <a href="" className="project-card-header-link">
                  Admin Dashboard
                </a>
              </h4>
              <p className="project-card-text">
                A video call application with PeerJs for end-to-end connection
                with another user for communication browser automation, enabling
                data extraction and storage from websites.
              </p>
              <ol className="project-card-list">
                <li className="project-card-list-item">
                  <a href="" className="project-card-list-item-link">
                    sample projects
                  </a>
                </li>
                <li className="project-card-list-item">
                  <a href="" className="project-card-list-item-link">
                    Get One
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-icon-container">
              <MdSchool className="project-card-icon" />
            </div>
            <div className="project-card-info">
              <h4 className="project-card-header">
                <a href="https://joshjsdev.netlify.app" target="_blank" className="project-card-header-link">
                  E-Learning platform
                </a>
              </h4>
              <p className="project-card-text">
                Embark on a transformative journey with our e-learning blog,
                guiding you from novice to proficient full-stack developer.
                Explore curated resources, expert insights, and hands-on
                tutorials, empowering you to master the intricacies of web
                development at every stage.
              </p>
              <ol className="project-card-list">
                <li className="project-card-list-item">
                  <a href="https://joshjsdev.netlify.app" target="_blank" className="project-card-list-item-link">
                    Get started
                  </a>
                </li>
                {/* <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Get One</a>
                                </li> */}
              </ol>
            </div>
          </div>
          {/* <div className='project-card'>
                        <div className='project-card-icon-container'>
                            <HiUserGroup className='project-card-icon' />
                        </div>
                        <div className='project-card-info'>
                            <h4 className='project-card-header'>
                                <a href='' className='project-card-header-link'>Join the community</a>
                            </h4>
                            <p className='project-card-text'>
                                Join my Tech-community that nurtures innovation, fosters
                                collaboration, and empowers individuals to continuously learn and
                                grow.
                            </p>
                            <ol className='project-card-list'>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Youtube</a>
                                </li>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Twitch</a>
                                </li>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Discord</a>
                                </li>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Twitter</a>
                                </li>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>GitHub</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='project-card'>
                        <div className='project-card-icon-container'>
                            <SiAwsorganizations className='project-card-icon' />
                        </div>
                        <div className='project-card-info'>
                            <h4 className='project-card-header'>
                                <a href='' className='project-card-header-link'>TFFE Inc.</a>
                            </h4>
                            <p className='project-card-text'>
                                At TFFE, our mission is to harness the power of cutting-edge technology skills to drive innovation,
                                solve complex challenges, and empower individuals and businesses to thrive in the digital age.
                            </p>
                            <ol className='project-card-list'>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Become a partner</a>
                                </li>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Become a sponsor</a>
                                </li>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>Twitter</a>
                                </li>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>YouTube</a>
                                </li>
                                <li className='project-card-list-item'>
                                    <a href='' className='project-card-list-item-link'>GitHub</a>
                                </li>
                            </ol>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
