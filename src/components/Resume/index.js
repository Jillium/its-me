import React from 'react';
import pdf from "../../assets/pdf/resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {



    return (
        <div>
            <a href={pdf} target="_blank" rel="noreferrer"><button className='button'>Download Resume</button></a>
            <section className='resume'>

                <Document file={pdf}><Page pageNumber={1} /><Page pageNumber={2} /></Document>

              

            </section>
        </div>
    )
}

export default Resume;