// import modules/packages
import React from 'react';
import "./Button.css";

// button props
type buttonProps = {
    color?: string,
    "background-color"?: string,    
    border?: string,
    "border-radius"?: string,
    "font-weight"?: string,
    "font-size"?: string,
    padding?: string 
};

const Button: React.FC<buttonProps> = () => {
  return (
    <button className=''>my button</button>
  )
}

export default Button;