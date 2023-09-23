// import modules/packages
import React from 'react';
import "./App.css";

// import components
import Navigation from './Utils/Navigation/Navigation';
import NavMenu from './Utils/NavMenu/NavMenu';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import About from './About/About';
import Skills from './Skills/Skills';
import Contacts from './Contacts/Contacts';
import Footer from './Utils/Footer/Footer';

// App component
const App: React.FC = () => {
    return (
        <div id='app-structure'>
            <Navigation />
            <NavMenu />
            <Intro />
            <Projects />
            <About />
            <Skills />
            <Contacts />
            <Footer />
        </div>
    );
};

export default App