import React from 'react';


function Portfolio(props) {
    const [currentProjects] = [
        {
            name: "#1fan",
            description: "This is a group project made for a coding bootcamp with the University of Utah. It is a full stack application. It was designed to be a hub for a music fan to be able to listen to music, save favorites, get artist info, and see information about local shows and also other shows by an artist. Users are able to create an account and log in an out. The app was built using MVC to help separate concerns, and handlebars.js was used as the templating language.",
            photo: `/src/assets/#1fan.png`
        },
        {
            name: "Moon-phases",
            description: "Group project for University of Utah web development coding bootcamp. Application provides information on moon phases and weather for an aspiring astro photographer. Made with HTML, CSS and Javascript. ",
            photo: `/src/assets/moon-phases.png`
        },
        {
            name: "tech-blog",
            description: "Full stack, cms style tech blog. Made for the University of Utah web development coding bootcamp.",
            photo: `/src/assets/tech-blog.png`
        },
       
    ]




return (
    <div>
        <h1>{currentProjects.name}</h1>
        <p>{currentProjects.description}</p>
        <div>
            <img src="./src/assets/#fan.png" alt="#1fan screenshot" />
        </div>
    </div>
)

}

export default Portfolio;