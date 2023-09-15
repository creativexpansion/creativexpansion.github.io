import styled from "styled-components";
import gioiello1 from "../../assets/images/portfolio/freehand/gioiello1.png";
import gioiello11 from "../../assets/images/portfolio/freehand/gioiello11.png";
import gioiello2 from "../../assets/images/portfolio/freehand/gioiello2.png";
import gioiello22 from "../../assets/images/portfolio/freehand/gioiello22.png";
import poltrona005 from "../../assets/images/portfolio/freehand/poltrona005.png";
import poltrona006 from "../../assets/images/portfolio/freehand/poltrona006.png";
import borsa1 from "../../assets/images/portfolio/freehand/borsa1.png";
import borsa2 from "../../assets/images/portfolio/freehand/borsa2.png";
import borsa3 from "../../assets/images/portfolio/freehand/borsa3.png";
import borsa4 from "../../assets/images/portfolio/freehand/borsa4.png";
import borsa5 from "../../assets/images/portfolio/freehand/borsa5.png";
import borsa6 from "../../assets/images/portfolio/freehand/borsa6.png";
import borsa7 from "../../assets/images/portfolio/freehand/borsa7.png";
import borsa11 from "../../assets/images/portfolio/freehand/borsa11.png";
import borsa22 from "../../assets/images/portfolio/freehand/borsa22.png";
import borsa33 from "../../assets/images/portfolio/freehand/borsa33.png";
import borsa44 from "../../assets/images/portfolio/freehand/borsa44.png";
import borsa55 from "../../assets/images/portfolio/freehand/borsa55.png";
import borsa66 from "../../assets/images/portfolio/freehand/borsa66.png";
import borsa77 from "../../assets/images/portfolio/freehand/borsa77.png";
import gioiello3 from "../../assets/images/portfolio/freehand/gioiello3.png";
import gioiello33 from "../../assets/images/portfolio/freehand/gioiello33.png";
import bracciale1 from "../../assets/images/portfolio/freehand/bracciale1.png";
import bracciale2 from "../../assets/images/portfolio/freehand/bracciale2.png";
import orecchino1 from "../../assets/images/portfolio/freehand/orecchino1.png";
import orecchino11 from "../../assets/images/portfolio/freehand/orecchino11.png";
import { titlePrefix } from "../utils";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
const StyledManoLibera = styled.div`
  width: calc(100% + 34px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -17px;

  img {
    width: 100%;
    max-width: 383px;
    /* max-width: calc(50% - 36px); */
    /* border: 1px solid #333333; */
    margin: 17px;
    box-shadow: inset 0 0 0 1px rgb(51, 51, 51);
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
  gioiello1,
  gioiello11,
  gioiello2,
  gioiello22,
  gioiello3,
  gioiello33,
  bracciale1,
  bracciale2,
  orecchino1,
  orecchino11,
  borsa1,
  borsa11,
  borsa2,
  borsa22,
  borsa3,
  borsa33,
  borsa4,
  borsa44,
  borsa5,
  borsa55,
  borsa6,
  borsa66,
  borsa7,
  borsa77,
  poltrona005,
  poltrona006,
];

const ManoLibera = () => {
  const { t } = useTranslation();
  return (
    <StyledManoLibera>
      <Helmet>
        <title>{`${titlePrefix}${t("header.menu.portfolio")} | ${t(
          "portfolio.menu.freehand"
        )}`}</title>
      </Helmet>
      {logos.map((logo, key) => (
        <img key={key} alt={"mano libera " + key} src={logo} />
      ))}
    </StyledManoLibera>
  );
};

export default ManoLibera;
