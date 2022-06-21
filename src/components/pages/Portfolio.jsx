import styled from "styled-components";
import PageContainer from "../PageContainer";
import Separator from "../Separator";
import { useActivePath } from "../utils";
import LogoDesign from "./LogoDesign";
import ManoLibera from "./ManoLibera";
import WIP from "./WIP";

export const PORTFOLIO = {
  LOGO_DESIGN: "LOGO_DESIGN",
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
  .menu {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 5px;
    margin-top: -30px;

    .links a {
      margin-right: 20px;
      font-size: 18px;
    }
  }
`;

const Portfolios = {
  LOGO_DESIGN: LogoDesign,
  INTERIOR_DESIGN: WIP,
  MANO_LIBERA: ManoLibera,
  FOTO_IMMAGINE: WIP,
};

const Portfolio = ({ selectedPortfolio = PORTFOLIO.LOGO_DESIGN }) => {
  let activeLink = {
    logoDesign: useActivePath("/portfolio/logo-design"),
    interiorDesign: useActivePath("/portfolio/interior-design"),
    manoLibera: useActivePath("/portfolio/mano-libera"),
    fotoImmagine: useActivePath("/portfolio/foto-immagine"),
  };
  const SelectedPortfolio = Portfolios[selectedPortfolio];
  return (
    <PageContainer>
      <StyledPortfolio>
        <div className="menu">
          <div className="links">
            <a className={activeLink.logoDesign} href="/portfolio/logo-design">
              logo design
            </a>
            <a
              className={activeLink.interiorDesign}
              href="/portfolio/interior-design"
            >
              interior design
            </a>
            <a className={activeLink.manoLibera} href="/portfolio/mano-libera">
              mano libera
            </a>
            <a
              className={activeLink.fotoImmagine}
              href="/portfolio/foto-immagine"
            >
              foto immagine
            </a>
          </div>
        </div>
        <Separator margin="5px 0 30px" />
        <SelectedPortfolio />
      </StyledPortfolio>
    </PageContainer>
  );
};

export default Portfolio;
