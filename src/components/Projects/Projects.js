import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/TeamProfileGenerator.png";
import weather from "../../Assets/Projects/weather.png";
import notetaker from "../../Assets/Projects/NoteTaker.png";
import readme from "../../Assets/Projects/ReadMeGenerator.jpg";
import codequiz from "../../Assets/Projects/CodingQuiz.png";
import emptracker from "../../Assets/Projects/EmployeeTracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent Work
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readme}
              isBlog={false}
              title="ReadMe Generator"
              description="
              This program generates a README file using the command line interface 
              and Node.js dynamically. 
              Runs in the terminal and prompts the user for information, 
              which is then populated in README file.
              The README created by this generator is formatted for specific use-cases.              
              "
              link="https://github.com/KS1/HW09-READMEGenerator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Team Profile Generator"
              description="
              This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. The application code is tested with Unit Test Code to make it maintainable.
               "
              link="https://github.com/KS1/HW10-TeamProfileGenerator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notetaker}
              isBlog={false}
              title="Note Taker"
              description="This simple note taking application allows you to save notes with a title and plain text. 
              It uses ExpressJS. 
              This application uses an Express.js back end and saves and retrieves note data from a JSON file.
              With Note Taker app, you will enjoy creating, viewing, and deleting notes!"
              
              link="https://github.com/KS1/HW11-NoteTaker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emptracker}
              isBlog={false}
              title="Employee Tracker"
              description="
              This is a Content Management System to view and manage the departments, roles, and employees in the company.
              The application uses JavaScript for user interface, MySQL to content all the company database, and Node.js to view and manage the SQL database.
              You can add, update and delete employees using commandline commands.
              A walkthrough video that demonstrates its functionality.
              "
              link="https://github.com/KS1/HW12-EmployeeManagementSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codequiz}
              isBlog={false}
              title="Coding Quiz"
              description="
              This application is a timed coding quiz with multiple-choice questions. 
              This app dynamically updates HTML and CSS with JavaScript code. 
              As a full-stack web developer, you will likely be asked to complete a coding assessments; 
              as part of an interview process. A typical coding assessment includes both multiple-choice questions and 
              interactive coding challenges. This application is to practice coding quizes.                                    
              "
              link="https://github.com/KS1/HW04-CodeQuiz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dashboard"
              description="
              A weather dashboard application runs in the browser and features dynamically updated HTML and CSS.
              It uses the OpenWeather One Call API (https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. 
              It uses `localStorage` to store persistent data.
              You can search the cities. It displays current weather conditions for that city.
              "
              link="https://github.com/KS1/HW06-WeatherDashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
