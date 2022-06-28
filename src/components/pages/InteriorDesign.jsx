import styled from "styled-components";
import interior001 from "../../assets/images/portfolio/interior/interior001.jpg";
import interior002 from "../../assets/images/portfolio/interior/interior002.jpg";
import Carousel from "../Carousel";
const StyledInteriorDesign = styled.div`
  width: calc(100% + 34px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -17px;

  img {
    width: 100%;
    max-width: 340px;
    border: 1px solid #333333;
    margin: 17px;
  }
`;

const images = [interior001, interior002];

const InteriorDesign = () => {
  return (
    <StyledInteriorDesign>
      <Carousel images={images} />
    </StyledInteriorDesign>
  );
};

export default InteriorDesign;
