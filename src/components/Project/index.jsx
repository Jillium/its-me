import React from 'react';
import no1fan from '../../assets/no1fan.png';
import moon from '../../assets/moon-phases.png';
import tech from "../../assets/tech-blog.png";
import budget from "../../assets/budget-tracker.png";
import deepThoughts from "../../assets/deep-thoughts.png";
import password from "../../assets/password-generator.png";


function Project() {
    const projects = [
        {
            id: 0,
            name: "#1Fan",
            description: "This is a group project made for a coding bootcamp with the University of Utah. It is a full stack application. It was designed to be a hub for a music fan to be able to listen to music, save favorites, get artist info, and see information about local shows and also other shows by an artist. Users are able to create an account and log in an out. The app was built using MVC to help separate concerns, and handlebars.js was used as the templating language.",
            photo: no1fan,
            url: "https://no1fan.herokuapp.com/",
            githublink: "https://github.com/Jillium/no1fan"
        },
        {
            id: 1,
            name: "Moon-phases",
            description: "Group project for University of Utah web development coding bootcamp. Application provides information on moon phases and weather for an aspiring astro photographer. Made with HTML, CSS and Javascript. ",
            photo: moon,
            url: "https://jillium.github.io/moon-phase/",
            githublink: "https://github.com/Jillium/moon-phase"
        },
        {
            id: 2,
            name: "Tech-blog",
            description: "Full stack, cms style tech blog. Made for the University of Utah web development coding bootcamp.",
            photo: tech,
            url: "https://jilliumtechblog.herokuapp.com/",
            githublink: "https://github.com/Jillium/tech-blog"
        },
        {
            id: 3,
            name: "Budget-tracker",
            description: "PWA that allows for tracking budget expenditures online and offline",
            photo: budget,
            url: "https://hidden-forest-93792.herokuapp.com/",
            githublink: "https://github.com/Jillium/financial-disclosure"
        },
        {
            id: 4,
            name: "Deep Thoughts",
            description: "Social Media site with graphQL. Allows users to interact by posting thoughts, reactions and adding friends.",
            photo: deepThoughts,
            url: "https://damp-fortress-21208.herokuapp.com/",
            githublink: "https://github.com/Jillium/deep-thoughts"

        },
        {
            id: 5,
            name: "Password-Generator",
            description: "My first javascript project, built to generate a password randomly based on character choices by the user.",
            photo: password,
            url: "https://jillium.github.io/password-generator/",
            githublink: "https://github.com/Jillium/deep-thoughts"
        }
       
    ];




return (
    <section key={projects.id}>
        
        <div>
            {projects.map((project) => (
                <div className='project-card'>
                <h1><a href={project.url}>{project.name}</a></h1>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noreferrer"> <img src={project.photo}
            alt={`img of ${project.name}`}
            className="img-thumbnail mx-1"
             /></a>
             <span>See it on <a href={project.githublink}>Github</a></span>
             
            </div>
            ))}
            
        </div>

        
    </section>
)

}

export default Project;