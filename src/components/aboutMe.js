import React from 'react';
import BioImage from './img/BioImage.jpg'

export default function Profilepic() {
    return (
        <div>
            <img src={BioImage} alt="Bio Pic of Lesiana Reid" id="bio-img"></img>
            <div id="About-Me">
                <aside>
                    <h2> Who am I?</h2>
                </aside>
                <h3>

                    Innovative Web Developer with a Certificate in Full Stack Web Development from Georgia Institute of Technology. Bachelor degrees from Georgia Institute of Technology and Agnes Scott College.
                    Skills in React, SQL/NoSQL, and JavaScript/Java/Python and strengths in producing high quality applications, working in fast paced environments, and working in diverse multidisciplinary teams. Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. Excited to develop responsive websites and provide clients with the highest satisfaction. Positioned to provide unique perspectives on how end users interact with websites and software platforms by leveraging background in industrial/organizational psychology, engineering psychology, and ergonomics.

                </h3>
            </div>
        </div>
    )
}