import styled from "styled-components";
import interior001 from "../../assets/images/portfolio/interior/interior001.jpg";
import interior002 from "../../assets/images/portfolio/interior/interior002.jpg";
import interior003 from "../../assets/images/portfolio/interior/interior003.jpg";
import { titlePrefix } from "../utils";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
const StyledInteriorDesign = styled.div`
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

const images = [interior001, interior002, interior003];

const InteriorDesign = () => {
  const { t } = useTranslation();
  return (
    <StyledInteriorDesign>
      <Helmet>
        <title>{`${titlePrefix}${t("header.menu.portfolio")} | ${t(
          "portfolio.menu.interiorDesign"
        )}`}</title>
      </Helmet>
      {images.map((image, key) => (
        <img key={key} alt={"interior design " + key} src={image} />
      ))}
    </StyledInteriorDesign>
  );
};

export default InteriorDesign;
