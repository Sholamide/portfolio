import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  projectPortfolio,
  projectDjangoblog,
  projectNextShop,
  projectTips,
  projectCryptrack,
  projectReactzon,
  projectNetflixt,
  projectBlogats,
} from "./Data";

import {
  PortfolioContainer,
  PortfolioHeader,
  PortfolioWrapper,
  ProjectContent,
  ProjectDescription,
  ProjectHeaderImage,
  ProjectStatus,
  ProjectTitle,
} from "./PortfolioSectionElements";
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
  alt,
}) => {
  return (
    <ProjectContent>
      <ProjectHeaderImage src={projectImg} alt={alt} />
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <ProjectDescription>{projectDescription}</ProjectDescription>
      <ProjectStatus>{projectStatus}</ProjectStatus>
    </ProjectContent>
  );
};
const items = [
  <CarouselContent {...projectPortfolio} onDragStart={handleDragStart} />,
  <CarouselContent {...projectNextShop} onDragStart={handleDragStart} />,
  <CarouselContent {...projectDjangoblog} onDragStart={handleDragStart} />,
  <CarouselContent {...projectCryptrack} onDragStart={handleDragStart} />,
  <CarouselContent {...projectNetflixt} onDragStart={handleDragStart} />,
  <CarouselContent {...projectReactzon} onDragStart={handleDragStart} />,
  <CarouselContent {...projectTips} onDragStart={handleDragStart} />,
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
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
