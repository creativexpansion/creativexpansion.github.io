import styled from "styled-components";
import PageContainer from "../PageContainer";
import Separator from "../Separator";
import { useActivePath } from "../utils";
import InteriorDesign from "./InteriorDesign";
import LogoDesign from "./LogoDesign";
import ManoLibera from "./ManoLibera";
import Mockup from "./Mockup";
import Photos from "./Photos";
import { useTranslation } from "react-i18next";

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
  .submenu {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 5px;
    margin-top: -30px;

    .links a {
      margin-right: 20px;
      margin-left: 0;
      font-size: 18px;
    }
  }
  @media (max-width: 880px) {
    .submenu {
      text-align: center;

      .links a {
        margin-right: 10px;
        margin-left: 10px;
        font-size: 18px;
      }
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
  const { t } = useTranslation();
  const isMainPortfolio = useActivePath("/portfolio");
  const activeLink = {
    logoDesign: useActivePath("/portfolio/logo-design") || isMainPortfolio,
    mockup: useActivePath("/portfolio/mockup"),
    interiorDesign: useActivePath("/portfolio/interior-design"),
    manoLibera: useActivePath("/portfolio/mano-libera"),
    fotoImmagine: useActivePath("/portfolio/foto-immagine"),
  };
  const SelectedPortfolio = Portfolios[selectedPortfolio];
  return (
    <PageContainer>
      <StyledPortfolio>
        <div className="submenu">
          <div className="links">
            <a className={activeLink.logoDesign} href="/portfolio/logo-design">
              {t("portfolio.menu.logoDesign")}
            </a>
            <a className={activeLink.mockup} href="/portfolio/mockup">
              {t("portfolio.menu.mockup")}
            </a>
            <a
              className={activeLink.interiorDesign}
              href="/portfolio/interior-design"
            >
              {t("portfolio.menu.interiorDesign")}
            </a>
            <a className={activeLink.manoLibera} href="/portfolio/mano-libera">
              {t("portfolio.menu.freehand")}
            </a>
            <a
              className={activeLink.fotoImmagine}
              href="/portfolio/foto-immagine"
            >
              {t("portfolio.menu.photoImage")}
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
