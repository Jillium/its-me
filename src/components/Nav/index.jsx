import React from 'react';
import ContactForm from '../Contact';



function Nav(props) {
  
    

    const {
        setCategorySelected
    } = props;
    
  
     return (
        <ul className="nav">
           <li className='nav-item' onClick={() => setCategorySelected("About-Me")}>About Me</li>
           <li className='nav-item' onClick={() => setCategorySelected("Portfolio")}>Portfolio</li>
           <li className='nav-item' onClick={() => setCategorySelected("ContactForm")}>Contact</li>
           <li className='nav-item' onClick={() => setCategorySelected("Resume")}>Resume</li>
        </ul>
    )
}

export default Nav;

