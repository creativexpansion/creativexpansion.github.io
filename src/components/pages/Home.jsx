import styled from "styled-components";
import graphic003 from "../../assets/images/home/graphic003.jpg";
import PageContainer from "../PageContainer";
import { useTranslation } from "react-i18next";

const StyledHome = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const Home = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <StyledHome>
        <img src={graphic003} alt="welcome" />
      </StyledHome>
    </PageContainer>
  );
};

export default Home;
