import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #1f1f1f;
  color: #ffffff;
  width: 100%;
  max-width: 1100px;
  padding: 45px 0;

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
