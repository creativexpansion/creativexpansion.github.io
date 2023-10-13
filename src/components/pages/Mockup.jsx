import styled from "styled-components";
import polo_001 from "../../assets/images/portfolio/mockup/polo_001.png";
import polo_002 from "../../assets/images/portfolio/mockup/polo_002.png";
import maglietta_003 from "../../assets/images/portfolio/mockup/maglietta_003.png";
import maglietta_004 from "../../assets/images/portfolio/mockup/maglietta_004.png";
import maglietta_005 from "../../assets/images/portfolio/mockup/maglietta_005.png";
import cappello_006 from "../../assets/images/portfolio/mockup/cappello_006.png";
import tazza_007 from "../../assets/images/portfolio/mockup/tazza_007.png";
import bicchiere_008 from "../../assets/images/portfolio/mockup/bicchiere_008.png";
import biglietti_009 from "../../assets/images/portfolio/mockup/biglietti_009.png";
import pieghevole_010 from "../../assets/images/portfolio/mockup/pieghevole_010.png";
import pieghevole_011 from "../../assets/images/portfolio/mockup/pieghevole_011.png";
import libro_012 from "../../assets/images/portfolio/mockup/libro_012.png";
import libro_013 from "../../assets/images/portfolio/mockup/libro_013.png";
import libro_014 from "../../assets/images/portfolio/mockup/libro_014.png";
import libro_015 from "../../assets/images/portfolio/mockup/libro_015.png";
import blocc_016 from "../../assets/images/portfolio/mockup/blocc_016.png";
import bottiglia_017 from "../../assets/images/portfolio/mockup/bottiglia_017.png";
import tubetto_018 from "../../assets/images/portfolio/mockup/tubetto_018.png";

import { titlePrefix } from "../utils";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const StyledMockup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 58px;

  img {
    width: calc(33% - 36px);
    background: #ffffff;
  }

  @media (max-width: 798px) {
    img {
      width: calc(50% - 29px);
    }
  }

  @media (max-width: 480px) {
    justify-content: center;

    img {
      width: 100%;
      max-width: 331px;
    }
  }
`;

const images = [
  polo_001,
  polo_002,
  maglietta_003,
  maglietta_004,
  maglietta_005,
  cappello_006,
  tazza_007,
  bicchiere_008,
  biglietti_009,
  pieghevole_010,
  pieghevole_011,
  libro_012,
  libro_013,
  libro_014,
  libro_015,
  blocc_016,
  bottiglia_017,
  tubetto_018,
];

const Mockup = () => {
  const { t } = useTranslation();
  return (
    <StyledMockup>
      <Helmet>
        <title>{`${titlePrefix}${t("header.menu.portfolio")} | ${t(
          "portfolio.menu.mockup"
        )}`}</title>
      </Helmet>
      {images.map((image, key) => (
        <img key={key} alt={"mockup " + key} src={image} />
      ))}
    </StyledMockup>
  );
};

export default Mockup;
