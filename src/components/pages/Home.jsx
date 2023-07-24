import styled from "styled-components";
import graphic003 from "../../assets/images/home/graphic003.jpg";
import PageContainer from "../PageContainer";

const StyledHome = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <PageContainer>
      <StyledHome>
        <img src={graphic003} alt="welcome" />
      </StyledHome>
    </PageContainer>
  );
};

export default Home;
