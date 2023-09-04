import "../componentStyles/Projects.css";
import finstagrams from "../assets/finstagrams.jpeg"
import catchEmAll from "../assets/CatchEmAll.png"
import gigglyPsyduck from "../assets/gigglyPsyduck.png"
import Project from "./Project";
import { useState } from "react";
function Projects() {
    const allProjects = [
        {
            title:"Project 1",
            image:finstagrams,
            type:"SOFTWARE",
            tools:"React, Figma YIPEE",
            description:"Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah "
        },
        {
            title:"Project 2",
            image:catchEmAll,
            type:"SOFTWARE",
            tools:"React, Figma YIPEE",
            description:"Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah "
        },
        {
            title:"Project 3",
            image:catchEmAll,
            type:"HARDWARE",
            tools:"React, Figma YIPEE",
            description:"Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah "
        },

    ]
    const [selectedButton, setSelectedButton] = useState(null);
    const [filteredProjects, setFilteredProjects] = useState(allProjects);
    const handleButtonClick = (buttonType) => {
        if (selectedButton === buttonType) {
          setSelectedButton(null);
          setFilteredProjects(allProjects);
        } else {
          setSelectedButton(buttonType);
          const filtered = allProjects.filter(
            (project) => project.type === buttonType
          );
          setFilteredProjects(filtered);
        }
      };
    return (
    <div className="projects">
        <img className="gigglyPsyduck" src={gigglyPsyduck}/>
        <div  className="projects-title">
            <p>
                Projects
            </p>
        </div>
        <div className="button-div">
        <div
          className={`software-button ${
            selectedButton === "SOFTWARE" ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("SOFTWARE")}
        >
          <p>Software</p>
        </div>
            <div
          className={`hardware-button ${
            selectedButton === "HARDWARE" ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("HARDWARE")}
        >
          <p>Hardware</p>
        </div>
        </div>
        <div className="projects-container">
        {filteredProjects.map((project) => {
          return (
            <Project
              key={project.title}
              type={project.type}
              title={project.title}
              description={project.description}
              image={project.image}
              tools={project.tools}
            />
          );
        })}
        </div>
    </div>
)

}

export default Projects;
