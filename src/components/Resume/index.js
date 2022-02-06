import React from 'react';
import pdf from "../../assets/pdf/resume.pdf";
import resume1 from "../../assets/resume1.jpg";
import resume2 from "../../assets/resume2.jpg";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {



    return (
        <div>
            <a href={pdf} target="_blank"><button className='button'>Download Resume</button></a>
            <section>

                <Document file={pdf}><Page pageNumber={1} /><Page pageNumber={2} /></Document>

                {/* <img src={resume1} alt="resume-1" className='resume'></img> */}
                {/* <img src={resume2} alt="resume-2" className='resume'></img> */}

            </section>
        </div>
    )
}

export default Resume;