import styled from "styled-components";
import home_creative_it from "../../assets/images/home/home_creative_it.jpg";
import home_creative_en from "../../assets/images/home/home_creative_en.jpg";
import PageContainer from "../PageContainer";
import { useTranslation } from "react-i18next";

const image = {
  it: home_creative_it,
  en: home_creative_en,
};

const StyledHome = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const Home = () => {
  const { i18n } = useTranslation();

  return (
    <PageContainer>
      <StyledHome>
        <img src={image[i18n.language.slice(0, 2)]} alt="welcome" />
      </StyledHome>
    </PageContainer>
  );
};

export default Home;
