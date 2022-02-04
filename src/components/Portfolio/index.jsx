import React from 'react';


function Portfolio() {
    const projects = [
        {
            id: 0,
            name: "#1fan",
            description: "This is a group project made for a coding bootcamp with the University of Utah. It is a full stack application. It was designed to be a hub for a music fan to be able to listen to music, save favorites, get artist info, and see information about local shows and also other shows by an artist. Users are able to create an account and log in an out. The app was built using MVC to help separate concerns, and handlebars.js was used as the templating language.",
            photo: "./assets/#1fan.png"
        },
        {
            id: 1,
            name: "Moon-phases",
            description: "Group project for University of Utah web development coding bootcamp. Application provides information on moon phases and weather for an aspiring astro photographer. Made with HTML, CSS and Javascript. ",
            photo: "./assets/moon-phases.png"
        },
        {
            id: 2,
            name: "Tech-blog",
            description: "Full stack, cms style tech blog. Made for the University of Utah web development coding bootcamp.",
            photo: "./assets/tech-blog.png"
        },
        {
            id: 3,
            name: "Budget-tracker",
            description: "PWA that allows for tracking budget expenditures online and offline",
            photo: "./assets/budget-tracker.png"
        },
        {
            id: 4,
            name: "Photoport",
            description: "Portfolio project for a photographer, follow along module project",
            photo: "./assets/photoport.png"
        }
       
    ];




return (
    <section key={projects.id}>
        
        <div className='flex-row'>
            {projects.map((project) => (
                <div>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <img src={project.img}
            alt={`img of ${project.name}`}
            className="img-thumbnail mx-1"
             />
            </div>
            ))}
            
        </div>
    </section>
)

}

export default Portfolio;