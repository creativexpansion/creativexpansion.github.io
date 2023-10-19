import styled from "styled-components";
import servizi_001_it from "../../assets/images/services/servizi_001_it.jpg";
import servizi_002_it from "../../assets/images/services/servizi_002_it.jpg";
import servizi_003_it from "../../assets/images/services/servizi_003_it.jpg";
import servizi_004_it from "../../assets/images/services/servizi_004_it.jpg";
import servizi_005_it from "../../assets/images/services/servizi_005_it.jpg";
import servizi_006_it from "../../assets/images/services/servizi_006_it.jpg";
import servizi_007_it from "../../assets/images/services/servizi_007_it.jpg";
import servizi_008_it from "../../assets/images/services/servizi_008_it.jpg";
import servizi_009_it from "../../assets/images/services/servizi_009_it.jpg";
import servizi_001_en from "../../assets/images/services/servizi_001_en.jpg";
import servizi_002_en from "../../assets/images/services/servizi_002_en.jpg";
import servizi_003_en from "../../assets/images/services/servizi_003_en.jpg";
import servizi_004_en from "../../assets/images/services/servizi_004_en.jpg";
import servizi_005_en from "../../assets/images/services/servizi_005_en.jpg";
import servizi_006_en from "../../assets/images/services/servizi_006_en.jpg";
import servizi_007_en from "../../assets/images/services/servizi_007_en.jpg";
import servizi_008_en from "../../assets/images/services/servizi_008_en.jpg";
import servizi_009_en from "../../assets/images/services/servizi_009_en.jpg";
import PageContainer from "../PageContainer";
import { titlePrefix } from "../utils";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const StyledServices = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 58px;

  a, img {
    width: calc(33% - 36px);
    height: calc(33% - 36px);
  }

  a > img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 798px) {
    a, img {
      width: calc(50% - 29px);
      height: auto;
    }
  }

  @media (max-width: 480px) {
    justify-content: center;

    a, img {
      width: 100%;
      max-width: 331px;
    }
  }
`;

const images = {
  it:
    [
      { image: servizi_001_it },
      { image: servizi_002_it, link: '/portfolio/logo-design' },
      { image: servizi_003_it, link: '/portfolio/mockup' },
      { image: servizi_004_it },
      { image: servizi_005_it, link: '/portfolio/mano-libera' },
      { image: servizi_006_it, link: '/portfolio/interior-design' },
      { image: servizi_007_it },
      { image: servizi_008_it },
      { image: servizi_009_it },
    ],
  en:
    [
      { image: servizi_001_en },
      { image: servizi_002_en, link: '/portfolio/logo-design' },
      { image: servizi_003_en, link: '/portfolio/mockup' },
      { image: servizi_004_en },
      { image: servizi_005_en, link: '/portfolio/mano-libera' },
      { image: servizi_006_en, link: '/portfolio/interior-design' },
      { image: servizi_007_en },
      { image: servizi_008_en },
      { image: servizi_009_en },
    ],
};

const Services = () => {
  const { i18n, t } = useTranslation();

  return (
    <PageContainer>
      <Helmet>
        <title>{`${titlePrefix}${t("header.menu.services")}`}</title>
      </Helmet>
      <StyledServices>
        {images[i18n.language.slice(0, 2)].map(({ image, link }, key) => link
          ? <a key={key} href={link}><img key={key} alt={`${t("header.menu.services")} ${key}`} src={image} /></a>
          : <img key={key} alt={`${t("header.menu.services")} ${key}`} src={image} />
        )}
      </StyledServices>
    </PageContainer>
  );
};

export default Services;
