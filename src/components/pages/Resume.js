import React from 'react';

export default function Resume() {
  return (
      <div>
        <h2>Resume</h2>
        <h3 id="front">Front-end  proficiencies </h3>
        <ul id="list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
  
        <h3 id="back">Back-end proficiencies</h3>
        <ul id="list">
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
    );
  }