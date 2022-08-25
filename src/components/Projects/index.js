import React from "react";
import ProjectCard from "../ProjectCard";
import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsWrapper,
  ProjectsSubLink,
  ProjectsGrid,
} from "./ProjectsComponents";

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <ProjectsHeader>Projects</ProjectsHeader>
        {/* <ProjectsGrid>
          {ProjectsList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid> */}

        <ProjectsSubLink to="/projects">View all projects</ProjectsSubLink>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;

// const ProjectsList = [
//   {
//     id: "1",
//     title: "Portfolio Website",
//     description: "My online portfolio website built using React",
//     githubLink: "https://github.com/Sholamide/portfolio",
//     siteURL: "https://olamide-so.vercel.app",
//     siteImage: android,
//   },
// ];
