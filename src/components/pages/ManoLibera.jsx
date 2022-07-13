import { useEffect } from "react";
import styled from "styled-components";
import borsa003 from "../../assets/images/portfolio/freehand/borsa003.png";
import borsa004 from "../../assets/images/portfolio/freehand/borsa004.png";
import oreficeria001 from "../../assets/images/portfolio/freehand/oreficeria001.png";
import oreficeria002 from "../../assets/images/portfolio/freehand/oreficeria002.png";
import poltrona005 from "../../assets/images/portfolio/freehand/poltrona005.png";
import poltrona006 from "../../assets/images/portfolio/freehand/poltrona006.png";
import borsa3 from "../../assets/images/portfolio/freehand/borsa3.png";
import gioiello3 from "../../assets/images/portfolio/freehand/gioiello3.png";
import { titlePrefix } from "../utils";
const StyledManoLibera = styled.div`
  width: calc(100% + 34px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -17px;

  img {
    width: 100%;
    max-width: 340px;
    /* max-width: calc(50% - 36px); */
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

const logos = [
  oreficeria001,
  oreficeria002,
  gioiello3,
  borsa003,
  borsa004,
  borsa3,
  poltrona005,
  poltrona006,
];

const ManoLibera = () => {
  useEffect(() => {
    document.title = titlePrefix + "Portfolio | Mano Libera";
  }, []);
  return (
    <StyledManoLibera>
      {logos.map((logo, key) => (
        <img key={key} alt={"mano libera " + key} src={logo} />
      ))}
    </StyledManoLibera>
  );
};

export default ManoLibera;
