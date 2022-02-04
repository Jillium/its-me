import React from 'react';



function Nav(props) {
  
    

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;
    
  
     return (
        <ul className="nav">
           <a href="#about" onClick={() => setContactSelected(false)}><li className='nav-item'>About Me</li></a>
           <li className='nav-item'>Portfolio</li>
           <li className='nav-item'>Contact</li>
           <li className='nav-item'>Resume</li>
        </ul>
    )
}

export default Nav;