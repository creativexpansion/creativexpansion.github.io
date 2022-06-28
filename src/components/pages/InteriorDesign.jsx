import styled from "styled-components";
import interior001 from "../../assets/images/portfolio/interior/interior001.jpg";
import interior002 from "../../assets/images/portfolio/interior/interior002.jpg";
import Carousel from "../Carousel";
const StyledInteriorDesign = styled.div``;

const images = [interior001, interior002];

const InteriorDesign = () => {
  return (
    <StyledInteriorDesign>
      <Carousel images={images} />
    </StyledInteriorDesign>
  );
};

export default InteriorDesign;
