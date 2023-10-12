import styled from "styled-components";
import mockup001 from "../../assets/images/portfolio/mockup/mockup001.jpg";
import mockup002 from "../../assets/images/portfolio/mockup/mockup002.jpg";
import mockup003 from "../../assets/images/portfolio/mockup/mockup003.jpg";
import mockup004 from "../../assets/images/portfolio/mockup/mockup004.jpg";
import mockup005 from "../../assets/images/portfolio/mockup/mockup005.jpg";
import mockup006 from "../../assets/images/portfolio/mockup/mockup006.jpg";
import mockup007 from "../../assets/images/portfolio/mockup/mockup007.jpg";
import mockup008 from "../../assets/images/portfolio/mockup/mockup008.jpg";
import mockup009 from "../../assets/images/portfolio/mockup/mockup009.jpg";
import mockup010 from "../../assets/images/portfolio/mockup/mockup010.jpg";
import mockup011 from "../../assets/images/portfolio/mockup/mockup011.jpg";
import mockup012 from "../../assets/images/portfolio/mockup/mockup012.jpg";
import mockup013 from "../../assets/images/portfolio/mockup/mockup013.jpg";
import mockup014 from "../../assets/images/portfolio/mockup/mockup014.jpg";
import { titlePrefix } from "../utils";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
const StyledMockup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    img {
      width: 100%;
      max-width: 331px;
    }
  }
`;

const images = [
  mockup001,
  mockup002,
  mockup003,
  mockup004,
  mockup005,
  mockup006,
  mockup007,
  mockup008,
  mockup009,
  mockup010,
  mockup011,
  mockup012,
  mockup013,
  mockup014,
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
