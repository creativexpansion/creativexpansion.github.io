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

  img {
    width: calc(33% - 36px);
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

const images = {
  it:
    [
      servizi_001_it,
      servizi_002_it,
      servizi_003_it,
      servizi_004_it,
      servizi_005_it,
      servizi_006_it,
      servizi_007_it,
      servizi_008_it,
      servizi_009_it,
    ],
  en:
    [
      servizi_001_en,
      servizi_002_en,
      servizi_003_en,
      servizi_004_en,
      servizi_005_en,
      servizi_006_en,
      servizi_007_en,
      servizi_008_en,
      servizi_009_en,
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
        {images[i18n.language.slice(0, 2)].map((image, key) => <img key={key} src={image} alt={`services_image_${key}`} />)}
      </StyledServices>
    </PageContainer>
  );
};

export default Services;
