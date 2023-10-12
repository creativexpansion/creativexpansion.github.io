import styled from "styled-components";
import aer002 from "../../assets/images/portfolio/logos/aer002.png";
import can004 from "../../assets/images/portfolio/logos/can004.png";
import chi005 from "../../assets/images/portfolio/logos/chi005.png";
import eli001 from "../../assets/images/portfolio/logos/eli001.png";
import inn003 from "../../assets/images/portfolio/logos/inn003.png";
import pne006 from "../../assets/images/portfolio/logos/pne006.png";
import gol008 from "../../assets/images/portfolio/logos/gol008.png";
import mus007 from "../../assets/images/portfolio/logos/mus007.png";
import sca009 from "../../assets/images/portfolio/logos/sca009.png";
import fam010 from "../../assets/images/portfolio/logos/fam010.png";
import mos011 from "../../assets/images/portfolio/logos/mos_011.png";
import stu012 from "../../assets/images/portfolio/logos/stu_012.png";
import cre013 from "../../assets/images/portfolio/logos/cre_013.png";
import ugu014 from "../../assets/images/portfolio/logos/ugu_014.png";
import { titlePrefix } from "../utils";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const StyledLogoDesign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 58px;

  img {
    width: calc(33% - 36px);
    background: #272727;
  }

  @media (max-width: 798px) {
    img {
      width: calc(50% - 29px);
    }
  }

  @media (max-width: 480px) {
    img {
      width: 100%;
      max-width: 331px;
    }
  }
`;

const logos = [
  eli001,
  inn003,
  aer002,
  can004,
  sca009,
  ugu014,
  gol008,
  stu012,
  mus007,
  fam010,
  chi005,
  mos011,
  cre013,
  pne006,
];

const LogoDesign = () => {
  const { t } = useTranslation();
  return (
    <StyledLogoDesign>
      <Helmet>
        <title>{`${titlePrefix}${t("header.menu.portfolio")} | ${t(
          "portfolio.menu.logoDesign"
        )}`}</title>
      </Helmet>
      {logos.map((logo, key) => (
        <img key={key} alt={"logo " + key} src={logo} />
      ))}
    </StyledLogoDesign>
  );
};

export default LogoDesign;
