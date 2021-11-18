import React from 'react';
import Project from './project';

//all projects
const projectInfo = [
    {
        id: 0,
        title: "Artnnection",
        description:
            "A digital art trading platform where artists, digital creators, and designers can share their creations.",
        repo: "https://github.com/Leci1259/Artnnection",
        deployed: "https://artnnection.herokuapp.com/",
        image: "./images/artnnection.png",
        tech: 'CSS, JS, jQuery, Handlebars,js, Express.js, SQL, Passport.js',
        instructions: 'Click the brown gift box to see an application preview. Click the title to see the deployed app. Click "repo" to see the repository.'

    },
    {
        id: 1,
        title: "Server-Side Station",
        description:
            "A site that provides additional insight on how server-side APIs work; it includes a documentation overview, implementation example and walk through.",
        repo: "https://github.com/Leci1259/server-side-api",
        deployed: "https://leci1259.github.io/server-side-api/",
        image: "./images/serverSideStation.png",
        tech: "HTML, CSS, JS, Open Brewery API, OpenWeather API"
    },
    {
        id: 2,
        title: "Fit Life",
        description:
            "A workout tracking site for resistance and cardio workouts.",
        repo: "https://github.com/Leci1259/fit_life",
        deployed: "https://lr-fit-life.herokuapp.com/",
        image: "./images/fitLife.jpg",
        tech: "HTML, CSS, JS, Express.js, MongoDB, Mongoose.js"
    },
    {
        id: 3,
        title: "Code Quiz",
        description:
            "This site is a short quiz on JavaScript fundamentals.",
        repo: "https://github.com/Leci1259/HW4-CodeQuiz",
        deployed: "https://leci1259.github.io/HW4-CodeQuiz/",
        image: "./images/codeQuiz.png",
        tech: "HTML, CSS, JS"
    },
    {
        id: 4,
        title: "Work Day Scheduler",
        description:
            "A Halloween-themed site that allows you to enter your schedule for the business hours of 9-5.",
        repo: "https://github.com/Leci1259/HW5-WorkDayScheduler",
        deployed: "https://leci1259.github.io/HW5-WorkDayScheduler/",
        image: "./images/workDayScheduler.png",
        tech: "HTML, CSS, JS, jQuery"
    },
    {
        id: 5,
        title: "Weather Dash",
        description:
            "A site that will render the current weather and 5-day forecast for any city of your choice.",
        repo: "https://github.com/Leci1259/WeatherDash",
        deployed: "https://leci1259.github.io/WeatherDash/",
        image: "./images/weatherDash.png",
        tech: " HTML, CSS, JS, jQuery, OpenWeather API, Bootstrap"
    },
];

export default function WorkSection() {
    return (
        <div id="Work">
            <section className="card">
                <aside>
                    <h2>Work</h2>
                </aside>
            </section>
            <section className="card work">
                {projectInfo.map((project) => (
                    <Project
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        repo={project.repo}
                        deployed={project.deployed}
                        image={project.image}
                        tech={project.tech}
                        instructions={project.instructions}
                    />
                ))}
            </section>
        </div>
    );
}
