import React from 'react';
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


export default function Footer() {
    return (
        <section id="Contact">
            <ul>
                <li> Contact Me: </li>
                <li> <a href="tel:4046687271" target="_blank" rel="noopener noreferrer"><GiVibratingSmartphone /></a> </li>
                <li> <a href="mailto: lesianareid@gmail.com" target="_blank" rel="noopener noreferrer"> <MdMarkEmailUnread /> </a> </li>
                <li> <a href="https://github.com/Leci1259" target="_blank" rel="noopener noreferrer"><BsGithub /> </a> </li>
                <li> <a href="https://www.linkedin.com/in/lesiana-reid/" target="_blank" rel="noopener noreferrer"> <BsLinkedin /> </a> </li>
            </ul>
        </section >
    );
}
