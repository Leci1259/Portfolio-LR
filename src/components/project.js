import React from 'react';

//all variables needed

const classes = [0, 1, 2, 3, 4, 5]

const ogPic = "./images/brownGiftBox.png";

const newSrcTags = ['./Assets/images/artnnection.png', './Assets/images/serverSideStation.png', './Assets/images/fitLife.jpg', './Assets/images/codeQuiz.png', './Assets/images/workDayScheduler.png', './Assets/images/weatherDash.png'];

const titles = ['Artnnection', 'Server-Side Station', 'Fit Life', 'Code Quiz', 'Work Day Scheduler', 'Weather Dash'];

const deployedAppLinks = ['https://artnnection.herokuapp.com/', 'https://leci1259.github.io/server-side-api/', 'https://lr-fit-life.herokuapp.com/', 'https://leci1259.github.io/HW4-CodeQuiz/', 'https://leci1259.github.io/HW5-WorkDayScheduler/', 'https://leci1259.github.io/WeatherDash/'];

const repoLinks = ['https://github.com/Leci1259/Artnnection', 'https://github.com/Leci1259/server-side-api', 'https://github.com/Leci1259/fit_life', 'https://github.com/Leci1259/HW4-CodeQuiz', 'https://github.com/Leci1259/HW5-WorkDayScheduler', 'https://github.com/Leci1259/WeatherDash'];

//function to output project cards
export default function Project() {


    return (
        <section class="work-card">
            <img class={classes[0]} alt='project images' src={ogPic} height="400px" width="400px" onClick={handleClick}></img>
            <div class="card text ">
                <a href={deployedAppLinks[0]} target="_blank" rel="noopener noreferrer">
                    <h4> {titles[0]} </h4>
                </a>
                <p>
                    <a href={repoLinks[0]} target="_blank" rel="noopener noreferrer">Repo </a>
                    <br></br> <br></br>
                </p>
            </div>
        </section>
    )
}

