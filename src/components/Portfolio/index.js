import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  projectPortfolio,
  projectDjangoblog,
  projectNextBlog,
  projectCryptrack,
  projectReactzon,
  projectNetflixt,
  projectBlogats,
} from "../../data/portfolioData";

import {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioWrapper,
  ProjectContent,
  ProjectDescription,
  ProjectHeaderImage,
  ProjectStatus,
  ProjectTitle,
  ProjectUrl,
  PortfolioSubLink,
} from "./PortfolioComponents";
const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  480: { items: 1 },
  568: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
};

const CarouselContent = ({
  projectImg,
  projectTitle,
  projectDescription,
  projectStatus,
  projectLink,
  alt,
}) => {
  return (
    <ProjectContent>
      <ProjectHeaderImage src={projectImg} alt={alt} />
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <ProjectDescription>{projectDescription}</ProjectDescription>
      <ProjectStatus>{projectStatus}</ProjectStatus>
      <ProjectUrl target="_blank" href={`https://${projectLink}`}>
        {projectLink}
      </ProjectUrl>
    </ProjectContent>
  );
};
const items = [
  <CarouselContent {...projectPortfolio} onDragStart={handleDragStart} />,
  <CarouselContent {...projectNextBlog} onDragStart={handleDragStart} />,
  <CarouselContent {...projectDjangoblog} onDragStart={handleDragStart} />,
  <CarouselContent {...projectCryptrack} onDragStart={handleDragStart} />,
  <CarouselContent {...projectNetflixt} onDragStart={handleDragStart} />,
  <CarouselContent {...projectReactzon} onDragStart={handleDragStart} />,
  <CarouselContent {...projectBlogats} onDragStart={handleDragStart} />,
];

const PortfolioSection = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioWrapper>
        <PortfolioHeader>portfolio & projects</PortfolioHeader>
        <AliceCarousel
          disableButtonsControls
          mouseTracking
          startIndex={1}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          items={items}
          animationType="fadeout"
          responsive={responsive}
        />
        <PortfolioSubLink to="/projects">View All</PortfolioSubLink>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
