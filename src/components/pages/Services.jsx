import styled from "styled-components";
import graphicS002 from "../../assets/images/services/graphicS002.jpg";
import PageContainer from "../PageContainer";

const StyledServices = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const Services = () => {
  return (
    <PageContainer>
      <StyledServices>
        <img src={graphicS002} alt="welcome" />
      </StyledServices>
    </PageContainer>
  );
};

export default Services;
