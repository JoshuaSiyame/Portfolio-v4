// import modules/packages
import React from 'react';
import "./Projects.css";

// import icons
import { ImProfile } from "react-icons/im";
import { AiTwotoneShop } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2"

// Projects component
const Projects: React.FC = () => {
    return (
        <div id='projects'>
            <div id='projects-container'>
                <h3 id='projects-header'>Projects</h3>
                <div id="projects-card-container">
                    <div className='project-card'>
                        <div className='project-card-icon-container'>
                            <ImProfile className='project-card-icon' />
                        </div>
                        <div className='project-card-info'>
                            <h4 className='project-card-header'>
                                <a href='' className='project-card-header-link'>mleta.com/portfolios</a>
                            </h4>
                            <p className='project-card-text'>
                                Create a stunning portfolio website that showcases your talents and
                                accomplishments, leaving a lasting impression on visitors.
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
                    </div>
                    <div className='project-card'>
                        <div className='project-card-icon-container'>
                            <AiTwotoneShop className='project-card-icon' />
                        </div>
                        <div className='project-card-info'>
                            <h4 className='project-card-header'>
                                <a href='' className='project-card-header-link'>mleta.com/e-commerce</a>
                            </h4>
                            <p className='project-card-text'>
                                Create a stunning e-commerce website that showcases your products and
                                services, leaving a lasting impression on visitors.
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
                    </div>
                    <div className='project-card'>
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
                </div>
            </div>
        </div>
    );
};

export default Projects;