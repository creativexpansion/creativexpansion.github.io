import styled from "styled-components";
import freehand_001 from "../../assets/images/portfolio/freehand/freehand_001.png" 
import freehand_002 from "../../assets/images/portfolio/freehand/freehand_002.png" 
import freehand_003 from "../../assets/images/portfolio/freehand/freehand_003.png" 
import freehand_004 from "../../assets/images/portfolio/freehand/freehand_004.png" 
import freehand_005 from "../../assets/images/portfolio/freehand/freehand_005.png" 
import freehand_006 from "../../assets/images/portfolio/freehand/freehand_006.png" 
import freehand_007 from "../../assets/images/portfolio/freehand/freehand_007.png" 
import freehand_008 from "../../assets/images/portfolio/freehand/freehand_008.png" 
import freehand_009 from "../../assets/images/portfolio/freehand/freehand_009.png" 
import freehand_010 from "../../assets/images/portfolio/freehand/freehand_010.png" 
import freehand_011 from "../../assets/images/portfolio/freehand/freehand_011.png" 
import freehand_012 from "../../assets/images/portfolio/freehand/freehand_012.png" 
import freehand_013 from "../../assets/images/portfolio/freehand/freehand_013.png" 
import freehand_014 from "../../assets/images/portfolio/freehand/freehand_014.png" 
import freehand_015 from "../../assets/images/portfolio/freehand/freehand_015.png" 
import freehand_016 from "../../assets/images/portfolio/freehand/freehand_016.png" 
import freehand_017 from "../../assets/images/portfolio/freehand/freehand_017.png" 
import freehand_018 from "../../assets/images/portfolio/freehand/freehand_018.png" 
import freehand_019 from "../../assets/images/portfolio/freehand/freehand_019.png" 
import freehand_020 from "../../assets/images/portfolio/freehand/freehand_020.png" 
import freehand_021 from "../../assets/images/portfolio/freehand/freehand_021.png" 
import freehand_022 from "../../assets/images/portfolio/freehand/freehand_022.png" 
import freehand_023 from "../../assets/images/portfolio/freehand/freehand_023.png" 
import freehand_024 from "../../assets/images/portfolio/freehand/freehand_024.png"
import { titlePrefix } from "../utils";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const StyledManoLibera = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
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
    justify-content: center;

    img {
      width: 100%;
      max-width: 331px;
    }
  }
`;

const images = [
  freehand_001,
  freehand_002,
  freehand_003,
  freehand_004,
  freehand_005,
  freehand_006,
  freehand_007,
  freehand_008,
  freehand_009,
  freehand_010,
  freehand_011,
  freehand_012,
  freehand_013,
  freehand_014,
  freehand_015,
  freehand_016,
  freehand_017,
  freehand_018,
  freehand_019,
  freehand_020,
  freehand_021,
  freehand_022,
  freehand_023,
  freehand_024,
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
      {images.map((image, key) => (
        <img key={key} alt={"mano libera " + key} src={image} />
      ))}
    </StyledManoLibera>
  );
};

export default ManoLibera;
