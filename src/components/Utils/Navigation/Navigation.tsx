// import modules/packages
import React, { useState } from 'react';
import "./Navigation.css";

// import icons
import { FaBars } from "react-icons/fa";

// Navigation component
const Navigation = () => {
    
    // dom manipulation to handle toggle
    const handleToggle = () =>{
        // get element by id
        const navMenuId: any = document.getElementById("nav-menu");
        // change the id to display the nav
        navMenuId.id = "nav-menu-active";
    }

    // hide hamburger icon on menu toggle
    const hideIcon = () =>{
        // get icon by id
        const hamburgerIcon: any = document.getElementById("hamburger-icon");
        hamburgerIcon.style.display = "none"
    };

    return (
        <div id="navigation" className="app-wrapper">
            <div id='nav-container'>
                <a href="/" className='logo'>Joshua P siyame</a>
                <FaBars id='hamburger-icon' className="nav-icon" onClick={()=>{handleToggle(); hideIcon()}}/>
            </div>
        </div>
    );
};

export default Navigation;
export {}