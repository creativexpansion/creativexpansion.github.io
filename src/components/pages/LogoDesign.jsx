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
    max-width: calc(50% - 36px);
    border: 1px solid #333333;
    margin: 17px;
  }

  @media (max-width: 370px) {
    margin: 0;
    width: 100%;
    img {
      margin: 17px 0;
      max-width: 100%;
    }
  }
`;

const logos = [eli001, aer002, inn003, can004, chi005, pne006];

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
