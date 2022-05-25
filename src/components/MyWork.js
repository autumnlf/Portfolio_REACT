import React from "react";

function MyWork() {
    return (
        <section id="myWork">
            <h2>My Work</h2>
            <div id="lineBreak"></div>
            <div id="workContent">
                <div id="project">
                    <div id="titles">
                        <h3>Eventplan</h3>
                        <a href="https://jdmill.github.io/Eventplan/" target="blank">Deployment</a>
                    </div>
                    <a id="p1" href="https://github.com/jdmill/Eventplan" target="blank"> </a>
                    <p>Our group created an easy to use, user-friendly way to see local events in their desired location.
                    </p>
                </div>

                <div id="project">
                    <div id="titles">
                        <h3>Community Bulletin Board</h3>
                        <a href="https://www.npmjs.com/package/@gtbootcampproject2/community-bulletin-board"
                            target="blank">NPM Package
                            Link</a>
                    </div>
                    <a id="p2" href="https://github.com/barrygilreath3/community-bulletin-board" target="blank"> </a>
                    <p>For this group project we published an npm package for generating a message
                        board site.</p>
                </div>

                <div id="project">
                    <div id="titles">
                        <h3>Weather Dashboard</h3>
                        <a href="https://autumnlf.github.io/HW06_Weather-Dashboard/" target="blank">Deployment</a>
                    </div>
                    <a id="p3" href="https://github.com/autumnlf/HW06_Weather-Dashboard" target="blank"> </a>
                    <p>A weather site that allows the user to type in a city and be given the current
                        weather as well as a 5-day forecast.</p>
                </div>

                <div id="project">
                    <div id="titles">
                        <h3>Password Generator</h3>
                        <a href="https://autumnlf.github.io/HW03_PasswordGenerator/" target="blank">Deployment</a>
                    </div>
                    <a id="p4" href="https://github.com/autumnlf/HW03_PasswordGenerator" target="blank"> </a>
                    <p>This site allows users to choose attributes to include and be given a randomly
                        generated password.</p>
                </div>

                <div id="project">
                    <div id="titles">
                        <h3>Team Profile Generator</h3>
                    </div>
                    <a id="p5" href="https://github.com/autumnlf/Team-Profile-Generator" target="blank"> </a>
                    <p>This application generates an html file after gathering information through
                        command-line prompts for a user to add team members.</p>
                </div>

            </div>
        </section>
    );
}

export default MyWork;