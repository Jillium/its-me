import React from 'react';
import pdf from "../../assets/pdf/resume.pdf";



function Resume() {

    return (
        <div>
            <img src={pdf} alt="jill holmes resume"></img>
        <a href = {pdf} target = "_blank"><button>Download Resume</button></a>
        </div>
    )
}

export default Resume;