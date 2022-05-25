import React from "react";
import Selfie from '../assets/Autumn Fields_Photo.jpg'

function aboutMe() {
    return (
        <div id="aboutMe">
            <img id="selfie" src={Selfie} alt=""></img>
            <div id="aboutContent">
                <h2>About Me</h2>
                <div id="lineBreakAbout"></div>
                <p>
                    I'm an Industrial Design graduate from Georgia Tech.
                    <br></br>
                    <br></br>
                    I enjoy user experience and interface design, front-end development, CAD modeling and animation, and
                    smart product design.
                    <br></br>
                    <br></br>
                    Thanks for checking out my work.
                </p>
            </div>
        </div>
    );
}

export default aboutMe;