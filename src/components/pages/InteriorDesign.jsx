import styled from "styled-components";
import interior001 from "../../assets/images/portfolio/interior/interior001.jpg";
import interior002 from "../../assets/images/portfolio/interior/interior002.jpg";
import interior003 from "../../assets/images/portfolio/interior/interior003.jpg";
import Carousel from "../Carousel";
import { titlePrefix } from "../utils";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
const StyledInteriorDesign = styled.div``;

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
      <Carousel images={images} />
    </StyledInteriorDesign>
  );
};

export default InteriorDesign;
