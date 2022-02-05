import { React, useState } from 'react';
import pdf from "../../assets/pdf/resume.pdf";
import resume1 from "../../assets/resume1.jpg";
import resume2 from "../../assets/resume2.jpg";


function Resume() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <img src={resume1} alt="resume-1" className='resume'></img>
            <img src={resume2} alt="resume-2" className='resume'></img>
            
            <a href={pdf} target="_blank"><button>Download Resume</button></a>
        </div>
    )
}

export default Resume;