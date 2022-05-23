import React from "react";
import {
  ProjectCardContainer,
  ProjectCardDescription,
  ProjectCardGithub,
  ProjectCardImage,
  ProjectCardLinkWrapper,
  ProjectCardTitle,
  ProjectCardURL,
  ProjectCardWrapper,
} from "./ProductCardComponent";

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      <ProjectCardWrapper>
        <ProjectCardImage
          src={project.siteImage}
          alt={`image for ${project.title}`}
        />
        <ProjectCardTitle>{project.title}</ProjectCardTitle>
        <ProjectCardDescription>{project.description}</ProjectCardDescription>
        <ProjectCardLinkWrapper>
          <ProjectCardURL
            target="_blank"
            rel="noreferrer noopener"
            href={project.siteURL}
          >
            VISIT SITE
          </ProjectCardURL>
          <ProjectCardGithub
            target="_blank"
            rel="noreferrer noopener"
            href={project.githubLink}
          >
            GITHUB
          </ProjectCardGithub>
        </ProjectCardLinkWrapper>
      </ProjectCardWrapper>
    </ProjectCardContainer>
  );
};
export default ProjectCard;
