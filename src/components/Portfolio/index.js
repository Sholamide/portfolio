import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "../../images/gatsby.svg";
import Django from "../../images/django.png";
import {
  projectPortfolio,
  projectDjangTurf,
  projectNextShop,
  projectBrezzident,
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
const Imagee = require("../../images/gatsby.svg");

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const truth = () => {
  console.log("Testing");
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
  <CarouselContent {...projectDjangTurf} onDragStart={handleDragStart} />,
  <CarouselContent {...projectBrezzident} onDragStart={handleDragStart} />,
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
