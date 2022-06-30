import { useEffect } from "react";
import styled from "styled-components";
import interior001 from "../../assets/images/portfolio/interior/interior001.jpg";
import interior002 from "../../assets/images/portfolio/interior/interior002.jpg";
import Carousel from "../Carousel";
import { titlePrefix } from "../utils";
const StyledInteriorDesign = styled.div``;

const images = [interior001, interior002];

const InteriorDesign = () => {
  useEffect(() => {
    document.title = titlePrefix + '| Portfolio | Interior Design';
  }, []);
  return (
    <StyledInteriorDesign>
      <Carousel images={images} />
    </StyledInteriorDesign>
  );
};

export default InteriorDesign;
