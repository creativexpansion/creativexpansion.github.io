import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #272727;
  color: #ffffff;
  width: 100%;
  max-width: 800px;
  padding: 43px 43px 20px;

  .welcomeImage {
    width: 100%;

    img {
      width: 100%;
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      color: #009ee1;
    }
    &.active {
      color: #009ee1;
    }
  }
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const PageContainer = ({ children }) => {
  return (
    <StyledPageContainer>
      <Header />
      {children}
      <Footer />
    </StyledPageContainer>
  );
};

export default PageContainer;
