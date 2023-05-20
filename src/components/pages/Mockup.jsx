import styled from "styled-components";
import mockup001 from "../../assets/images/portfolio/mockup/mockup001.jpg";
import mockup002 from "../../assets/images/portfolio/mockup/mockup002.jpg";
import mockup003 from "../../assets/images/portfolio/mockup/mockup003.jpg";
import mockup004 from "../../assets/images/portfolio/mockup/mockup004.jpg";
import mockup005 from "../../assets/images/portfolio/mockup/mockup005.jpg";
import mockup006 from "../../assets/images/portfolio/mockup/mockup006.jpg";
import mockup007 from "../../assets/images/portfolio/mockup/mockup007.jpg";
import mockup008 from "../../assets/images/portfolio/mockup/mockup008.jpg";
import mockup009 from "../../assets/images/portfolio/mockup/mockup009.jpg";
import mockup010 from "../../assets/images/portfolio/mockup/mockup010.jpg";
import mockup011 from "../../assets/images/portfolio/mockup/mockup011.jpg";
import mockup012 from "../../assets/images/portfolio/mockup/mockup012.jpg";
import mockup013 from "../../assets/images/portfolio/mockup/mockup013.jpg";
import mockup014 from "../../assets/images/portfolio/mockup/mockup014.jpg";
import Carousel from "../Carousel";
import { useEffect } from "react";
import { titlePrefix } from "../utils";
const StyledMockup = styled.div``;

const images = [
  mockup001,
  mockup002,
  mockup003,
  mockup004,
  mockup005,
  mockup006,
  mockup007,
  mockup008,
  mockup009,
  mockup010,
  mockup011,
  mockup012,
  mockup013,
  mockup014,
];

const Mockup = () => {
  useEffect(() => {
    document.title = titlePrefix + "Portfolio | Mockup";
  }, []);
  return (
    <StyledMockup>
      <Carousel images={images} />
    </StyledMockup>
  );
};

export default Mockup;