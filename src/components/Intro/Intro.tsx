// import modules/packages
import React from 'react';
import "./Intro.css";

// import icons 
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi"

// import image
import ImagePic from "./profileImg.jpg";

// Intro component
const Intro: React.FC = () => {
    return (
        <div id='intro'>
            <div id='intro-container'>
                <div id='image-container'>
                    <img src={ImagePic} alt='' className='intro-image' />
                </div>
                <h3 id='intro-header'>Joshua P Siyame</h3>
                <ol id='expertise-list' className='intro-list'>
                    <li className='intro-list-item'>Botanist</li>
                    <li className='intro-list-item'>Designer</li>
                    <li className='intro-list-item'>Software Engineer</li>
                    <li className='intro-list-item'>Solopreneur</li>
                </ol>
                <ol id="lang-list" className='intro-list'>
                    <li className='intro-list-item'>JavaScript</li>
                    <li className='intro-list-item'>/</li>
                    <li className='intro-list-item'>TypeScript</li>
                    {/* <li className='intro-list-item'>/</li>
                    <li className='intro-list-item'>Python</li>
                    <li className='intro-list-item'>/</li>
                    <li className='intro-list-item'>C++</li> */}
                </ol>
                <ol id='social-lists' className='intro-list'>
                    <li className='intro-list-item'>
                        <a href='mail:josh2023decoded@gmail.com' target='_blank' className='intro-list-item-icon-link'>
                            <HiOutlineMail className='intro-list-item-icon' />
                        </a>
                    </li>
                    <li className='intro-list-item'>
                        <a href='https://twitter.com/j_siyame' target='_blank' className='intro-list-item-icon-link'>
                            <FaSquareXTwitter className='intro-list-item-icon' />
                        </a>
                    </li>
                    <li className='intro-list-item'>
                        <a href='https://www.instagram.com/j__siyame' target='_blank' className='intro-list-item-icon-link'>
                            <FaInstagram className='intro-list-item-icon' />
                        </a>
                    </li>
                    <li className='intro-list-item'>
                        <a href='https://www.linkedin.com/in/joshua-siyame-a069ab282' target='_blank' className='intro-list-item-icon-link'>
                            <FaLinkedin className='intro-list-item-icon' />
                        </a>
                    </li>
                    <li className='intro-list-item'>
                        <a href='https://github.com/JoshuaSiyame' target='_blank' className='intro-list-item-icon-link'>
                            <FaGithubSquare className='intro-list-item-icon' />
                        </a>
                    </li>
                </ol>
                <ol id='intro-links' className='intro-list'>
                <li className='intro-list-item'>
                        <a href="https://docs.google.com/document/d/1XwivamqSt0lH2WYHlfJWK4ZBIpV7-XVb/edit?usp=drive_link&ouid=110990753748933052605&rtpof=true&sd=true" target='_blank' className='intro-list-item-link'>Resume</a>
                    </li>
                    <li className='intro-list-item'>
                        <a href="/#contacts" className='intro-list-item-link'>Contacts</a>
                    </li>
                    <li className='intro-list-item'>
                        <a href="/#hire-me" className='intro-list-item-link' style={{color: "#24c8a7", border: "2px solid #24c8a7"}}>Hire Me</a>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Intro;