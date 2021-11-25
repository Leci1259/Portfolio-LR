import React from 'react';
import { Link } from "react-router-dom";
import resume from './files/LR-Resume.pdf'


export default function NavBar() {
    return (
        <nav>
            <Link to="/Portfolio-LR" className="nav one">About Me</Link>
            <Link to="/work" className="nav two">Work</Link>
            <Link to={resume} target="_blank" download className="nav three">Resume</Link>
        </nav>
    );
}


