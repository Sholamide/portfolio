import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 450px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6),
        100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroBlock1 = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;
`;

export const HeroBlock2 = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1100px;
  position: absolute;
  justify-content: space-between;
  display: flex;
  padding: 8px 24px;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroIntro = styled.h1`
  color: #f3f3f3;
  font-weight: bold;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

export const HeroImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  position: relative;
  filter: drop-shadow(0 0 1.75rem #800080);
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

export const HeroP = styled.p`
  color: #f3f3f3;
  font-size: 18px;
  max-width: 1100px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
