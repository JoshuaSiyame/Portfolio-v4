// import modules/packages
import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import "./Contacts.css";

// import icons
import { FaGithubSquare, FaInstagramSquare, FaYoutube, } from 'react-icons/fa';
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io"
import { BsInstagram } from "react-icons/bs";
import axios from 'axios';

const Contacts: React.FC = () => {

    // form handling
    const handleFormSubmit = (e: any) =>{
        e.preventDefault();
    };

    // states to handle data submitted
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    // functions to handle the states
    const handleFullName = (e: ChangeEvent<HTMLInputElement>) =>{
        setFullName(e.target.value);
    };

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    };

    const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        setMessage(e.target.value);
    };

    // function to clear the form on submit 
    // should be after data being submitted to gmail.
    const clearHandler = () =>{
        setFullName("")
        setEmail("");
        setMessage("");        
    };

    // send message using axios
    const sendMessage = async () =>{
        const result = await axios.post("url", {fullName, email, message});
        
        // clear the fields after sending message
        clearHandler();
    };

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
                        <li className='data-list-item'><strong>Tel: </strong>+xxx xxx xx xxx</li>
                        <li className='data-list-item'><strong>Tel: </strong>+xxx xxx xx xxx</li>
                    </ol>
                </div>
                <div className='contact-data'>
                    <h4 className='contact-sub-header-2'>Socials accounts</h4>
                    <ol className='social-list'>
                        <li className='social-list-item'>
                            <a href='https://twitter.com/j_siyame' target='_blank' className='social-list-item-link'>
                                <FaSquareXTwitter className='social-list-item-icon' />
                            </a>
                        </li>
                        <li className='social-list-item'>
                            <a href='https://linkedin.com/in/joshua-siyame-a069ab282' target='_blank' className='social-list-item-link'>
                                <FaLinkedin className='social-list-item-icon' />
                            </a>
                        </li>
                        <li className='social-list-item'>
                            <a href='https://github.com/JoshuaSiyame' target='_blank' className='social-list-item-link'>
                                <FaGithubSquare className='social-list-item-icon' />
                            </a>
                        </li>
                        <li className='social-list-item'>
                            <a href='https://www.instagram.com/j__siyame' target='_blank' className='social-list-item-link'>
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
                    <form id='contact-form' onSubmit={handleFormSubmit}>
                        <div className='form-group'>
                            <input type='text' name='fullName' placeholder='Enter your Full Name' className='form-control' value={fullName} onChange={handleFullName} />
                        </div>
                        <div className='form-group'>
                            <input type='text' name='email' placeholder='Enter a valid email address' className='form-control' value={email} onChange={handleEmail}/>
                        </div>
                        <div className='form-group'>
                            <textarea placeholder='Enter your message here ...' className='form-control' rows={8} value={message} onChange={handleMessage}/>
                        </div>
                        <div className='form-group'>
                            <input type='submit' value="Send" className='primary-btn' onClick={clearHandler} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;