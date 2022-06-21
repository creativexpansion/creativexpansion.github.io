import styled from "styled-components";
import graphic001 from "../../assets/images/home/graphic001.jpg";
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
        <img src={graphic001} alt="welcome" />
      </StyledHome>
    </PageContainer>
  );
};

export default Home;
