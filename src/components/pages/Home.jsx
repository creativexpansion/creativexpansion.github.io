import styled from "styled-components";
import home002 from "../../assets/images/home/home002.jpg";
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
        <img src={home002} alt="welcome" />
      </StyledHome>
    </PageContainer>
  );
};

export default Home;
