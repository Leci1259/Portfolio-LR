import React, { useState } from 'react';
import brownBox from "./img/giftbox.png";

//function to output project cards
export default function Project(props) {

    const [pictureStatus, setPictureStatus] = useState(false);
    const ogPic = brownBox;

    const handleClick = () => {
        setPictureStatus(prevMode => !prevMode)
    }


    return (
        <section className="work-card">
            {props.instructions &&
                <p id='instructions'>
                    {props.instructions}
                </p>
            }
            <img className={props.id} alt='project images' src={pictureStatus ? props.image : ogPic} height="400px" width="500px" onClick={handleClick}></img>
            <div className="card text ">
                <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                    <h4> {props.title} </h4>
                </a>
                <p> {props.description}</p>
                <p>
                    <a href={props.repo} target="_blank" rel="noopener noreferrer">Repo </a>
                    <br></br> <br></br>
                    Technologies Used:<br></br>
                    {props.tech}
                </p>
            </div>
        </section>
    )
}

