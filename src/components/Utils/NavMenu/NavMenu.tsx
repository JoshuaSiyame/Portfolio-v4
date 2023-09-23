// import modules/packages
import React from 'react';
import "./NavMenu.css";

// import link data
import linksData from './linkData';

// import icon
import { FaTimes } from "react-icons/fa";

// NavMenu component
const NavMenu = () => {
    // dom manipulation to set the display value on click event
    const handleUnToggle = () => {
        // get element by id
        const navMenuId: any = document.getElementById("nav-menu-active");
        navMenuId.id = "nav-menu";
    };

    // display icon on close
    const showIcon = () => {
        // get element by id
        const hamburgerIcon: any = document.getElementById("hamburger-icon");
        hamburgerIcon.style.display = "block"
    };

    // display links
    const Links = linksData.map(link =>{
        return (
            <li className='nav-menu-item' key={link.key}>
                <a href={`#${link.urlValue}`} className='nav-menu-item-link' onClick={() => {handleUnToggle(); showIcon()}}>{link.textValue}</a>
            </li>
        );
    });

    return (
        <ol id='nav-menu'>
            {Links}
            <li className='nav-menu-item'>
                <FaTimes id="close-icon" className="nav-icon" onClick={() => { handleUnToggle(); showIcon() }} />
            </li>
        </ol>
    );
};

export default NavMenu;