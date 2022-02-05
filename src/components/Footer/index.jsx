import React from 'react';
import github from "../../assets/icons/GitHub-Mark/PNG/GitHub-Mark-32px.png";
import linkedIn from "../../assets/icons/linkedIn.png";
import instagram from "../../assets/icons/instagram.png";

function Footer() {
    
    return (
   <div className="footer-div">
       <footer className="footer">
       <ul className="footer-list">
           <li className="footer-item"><a href="https://github.com/Jillium"  target="_blank" rel="noreferrer"><img src={github} alt="github-icon"/></a></li>
           <li className="footer-item"><a href="https://www.instagram.com/shutupandsmile21/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram-icon" className='icon-instagram'></img></a></li>
           <li className="footer-item"><a href="https://www.linkedin.com/in/jillholmes688a23215/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="linked-in-icon" className='icon'></img></a></li>
           
       </ul>
       </footer>
   </div>
    )
}

export default Footer;