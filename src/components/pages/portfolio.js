import React from "react";

export default function Portfolio() {
    return (
        <section id="my-work" class="my-work">
        <div class="title"><h2>My Work</h2></div>
        <div class = "projects-grid-wrapper">
            <div class="projects-grid">

                <a href="https://lilythomas28.github.io/pet-adoption/" target="_blank" class="project project1" rel="noreferrer">
                    <div class="project-label">
                        <h3>Pet-Adoption</h3>
                    </div>
                </a>
                <a href="https://olvera1208.github.io/weather-dashboard/" target="_blank" class="project project2" rel="noreferrer">
                    <div class="project-label">
                        <h3>Weather Dashboard</h3>
                    </div>
                </a>
                <a href="https://intense-waters-01613.herokuapp.com/" target="_blank" class="project project3" rel="noreferrer">
                    <div class="project-label">
                        <h3>Weather IO project</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>

    );
};