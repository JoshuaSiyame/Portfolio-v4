// import modules/packages
import React from 'react';
import "./Contacts.css";

// import icons
import { FaGithubSquare, FaInstagramSquare, FaYoutube, } from 'react-icons/fa';
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io"
import { BsInstagram } from "react-icons/bs";

const Contacts: React.FC = () => {
    return (
        <div id='contacts'>
            <div id='contacts-container'>
                <h3 className='contacts-header'>Contacts</h3>
                <span id="contact-info">Ready To Talk ?</span>
                <h4 className='contact-sub-header'>Contact Me</h4>
                <p className='contact-message'>
                    If you have any question or doubt about coding or any project you are working on,
                    do not hesitate to contact me. Will try my best to answer you as soon as possible.
                </p>
                <div className='contact-data'>
                    <h4 className='contact-sub-header-2'>Contacts</h4>
                    <ol className='data-list'>
                        <li className='data-list-item'><strong>Email: </strong>joshdecoded@gmail.com</li>
                        <li className='data-list-item'><strong>Tel: </strong>+255 753 81 482</li>
                        <li className='data-list-item'><strong>Tel: </strong>+255 380 15 169</li>
                    </ol>
                </div>
                <div className='contact-data'>
                    <h4 className='contact-sub-header-2'>Socials accounts</h4>
                    <ol className='social-list'>
                        <li className='social-list-item'>
                            <a href='' target='_blank' className='social-list-item-link'>
                                <FaSquareXTwitter className='social-list-item-icon' />
                            </a>
                        </li>
                        <li className='social-list-item'>
                            <a href='' target='_blank' className='social-list-item-link'>
                                <FaLinkedin className='social-list-item-icon' />
                            </a>
                        </li>
                        <li className='social-list-item'>
                            <a href='' target='_blank' className='social-list-item-link'>
                                <FaGithubSquare className='social-list-item-icon' />
                            </a>
                        </li>
                        <li className='social-list-item'>
                            <a href='' target='_blank' className='social-list-item-link'>
                                <BsInstagram className='social-list-item-icon' />
                            </a>
                        </li>
                        <li className='social-list-item'>
                            <a href='' target='_blank' className='social-list-item-link'>
                                <IoLogoYoutube className='social-list-item-icon' />
                            </a>
                        </li>
                    </ol>
                </div>
                <div id='contact-form-container'>
                    <form id='contact-form'>
                        <div className='form-group'>
                            <input type='text' name='fullName' placeholder='Enter your Full Name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type='text' name='email' placeholder='Enter a valid email address' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <textarea placeholder='Enter your message here ...' className='form-control' rows={8}></textarea>
                        </div>
                        <div className='form-group'>
                            <button className='primary-btn'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;