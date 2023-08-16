import React from 'react'
import {House, Folders, NotePencil, FileText, EnvelopeSimple, GitBranch, Graph } from "phosphor-react";
import '../style.css'

const EMAIL = 'mailto:sleader@ualberta.ca'
const RESUME = '%PUBLIC_URL%/resume.pdf'
const LINKEDIN = 'https://www.linkedin.com/in/sam-leader/'
const GITHUB = 'https://github.com/samldr'


export const Nav = () => {
    return (
        <div className='nav'>
            <div className="links">
                <div className="links-spacing"><House/></div>
                <div className="links-spacing"><Folders/></div>
                <div className="links-spacing"><NotePencil/></div>
                <div className="links-spacing"><FileText/></div>  
            </div>
            <div className="links">
                <div className="links-spacing">
                    <a href={EMAIL}><EnvelopeSimple/></a>
                </div>
                <div className="links-spacing">
                    <a href={GITHUB}><GitBranch/></a>
                </div>
                <div className="links-spacing">
                    <a href={LINKEDIN}><Graph/></a>
                </div>
            </div> 
        </div>
    )
}