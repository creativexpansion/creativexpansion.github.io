import styled from "styled-components";
import PageContainer from "../PageContainer";
import InteriorDesign from "./InteriorDesign";
import LogoDesign from "./LogoDesign";
import ManoLibera from "./ManoLibera";
import Mockup from "./Mockup";
import Photos from "./Photos";

export const PORTFOLIO = {
  LOGO_DESIGN: "LOGO_DESIGN",
  MOCKUP: "MOCKUP",
  INTERIOR_DESIGN: "INTERIOR_DESIGN",
  MANO_LIBERA: "MANO_LIBERA",
  FOTO_IMMAGINE: "FOTO_IMMAGINE",
};

const StyledPortfolio = styled.div`
  .contactsImage {
    width: 100%;

    img {
      width: 100%;
    }
  }
`;

const Portfolios = {
  LOGO_DESIGN: LogoDesign,
  MOCKUP: Mockup,
  INTERIOR_DESIGN: InteriorDesign,
  MANO_LIBERA: ManoLibera,
  FOTO_IMMAGINE: Photos,
};

const Portfolio = ({ selectedPortfolio = PORTFOLIO.LOGO_DESIGN }) => {
  const SelectedPortfolio = Portfolios[selectedPortfolio];
  return (
    <PageContainer>
      <StyledPortfolio>
        <SelectedPortfolio />
      </StyledPortfolio>
    </PageContainer>
  );
};

export default Portfolio;
