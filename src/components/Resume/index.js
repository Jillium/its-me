import React from 'react';
import pdf from "../../assets/pdf/resume.pdf";
import resume1 from "../../assets/resume1.jpg";
import resume2 from "../../assets/resume2.jpg";


function Resume() {



    return (
        <div>
            <a href={pdf} target="_blank"><button className='button'>Download Resume</button></a>
            <section>

                <img src={resume1} alt="resume-1" className='resume'></img>
                <img src={resume2} alt="resume-2" className='resume'></img>

            </section>
        </div>
    )
}

export default Resume;