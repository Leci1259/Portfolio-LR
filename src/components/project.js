import React from 'react';


const newSrcTags = ['./images/artnnection.png', './images/serverSideStation.png', './images/fitLife.jpg', './images/codeQuiz.png', './images/workDayScheduler.png', './images/weatherDash.png'];



//function to output project cards
export default function Project(props) {

    const ogPic = "./images/brownGiftBox.png";

    return (
        <section className="work-card">
            {props.instructions &&
                <p id='instructions'>
                    {props.instructions}
                </p>
            }
            <img className={props.id} alt='project images' src={ogPic} height="400px" width="400px" ></img>
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

