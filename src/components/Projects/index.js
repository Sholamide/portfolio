import React from "react";

import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsWrapper,
  ProjectsSubLink,
} from "./ProjectsComponents";


const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <ProjectsHeader>Projects</ProjectsHeader>
       <div>here</div>
        <ProjectsSubLink to="/projects">View all projects</ProjectsSubLink>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;

const ProjectsList = [
  {
    
  }
]
