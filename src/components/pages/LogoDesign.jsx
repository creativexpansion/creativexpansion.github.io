import styled from "styled-components";
import aer002 from "../../assets/images/portfolio/logos/aer002.png";
import can004 from "../../assets/images/portfolio/logos/can004.png";
import chi005 from "../../assets/images/portfolio/logos/chi005.png";
import eli001 from "../../assets/images/portfolio/logos/eli001.png";
import inn003 from "../../assets/images/portfolio/logos/inn003.png";
import pne006 from "../../assets/images/portfolio/logos/pne006.png";
const StyledLogoDesign = styled.div`
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

const logos = [aer002, can004, chi005, eli001, inn003, pne006];

const LogoDesign = () => {
  return (
    <StyledLogoDesign>
      {logos.map((logo, key) => (
        <img key={key} alt={"logo " + key} src={logo} />
      ))}
    </StyledLogoDesign>
  );
};

export default LogoDesign;
