import React from 'react';
import profilePic from "../../assets/profile.JPG";

function About() {
    return (
        <div>
            <img src={profilePic} width="200" height="250" className='profile-img' alt="profile"></img>
       <p className='about'>Full stack web developer looking to utilize customer service and quality assurance background to create a balanced user experience while utilizing web applications. Currently a full stack flex web development student with the University of Utah coding bootcamp. Newly developed skills in Javascript, CSS, HTML, node.js, MySQL, React, MERN, and mongoDB. Focused on responsive web design and great user experience. Recently worked on a team of 4 to build a fan based music website that utilizes the MVC paradigm. Server side rendering with handlebars.js was also used, along with sequelize to manage the database. I am hoping to leverage my previous skills along with my new ones in a role where I can continue progressing. </p>
       </div>
    )
}

export default About;