// import modules/packages
import React, { useState} from 'react';
import "./Skills.css";

// import skills data
import skillData from './skillData';

// Skills component
const Skills: React.FC = () => {
    // skill-set type definition
    type skillSet = {
        key: string,
        skillTextValue: string,
        skillUrlValue: string
    }

    // states to handle the data 
    const [skills, setSkills] = useState<skillSet[]>(skillData);
    // function to render the skill
    const skill = skills.map(skill => {
        return (
            <a href={skill.skillUrlValue} target="_blank" className='skill-set-btn-link' key={skill.key}>
                <li className='skill-set-item'>{skill.skillTextValue}</li>
            </a>
        )
    })
    return (
        <div id='skills'>
            <div id='skills-container'>
                <h3 className='skill-header'>Skills</h3>
                <ol className='skill-set'>
                    {skill}
                </ol>
            </div>
        </div>
    );
};

export default Skills;