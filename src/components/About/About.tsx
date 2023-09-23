// import modules/packages
import React from 'react';
import "./About.css";

// About component 
const About: React.FC = () => {
  return (
    <div id='about'>
      <div id='about-container'>
        <h3 id='about-header'>About</h3>
        <p className='about-text'>
          I'm Joshua P. Siyame, a full-stack developer with a passion for both Frontend and Backend
          development I have a deep understanding of the latest technologies and frameworks in
          the industry. Throughout my career, I have had the privilege of working with a diverse
          range of teams and have demonstrated a proven ability to adapt to different
          environments and collaborate effectively with individuals from different backgrounds.
        </p>
        <p className='about-text'>
          Currently I work as a Freelancer where I oversee everything entailing the frontend and
          backend development of the clients products. I'm always looking to learn and improve my skills.
        </p>
      </div>
    </div>
  );
};

export default About