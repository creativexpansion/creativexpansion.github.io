import styled from "styled-components";

const StyledDeepSection = styled.div`
  padding: 10px;
  background-color: #1b1b1b;
  box-shadow: inset 0 -1px 0 0 #0c0c0c, inset 0 1px 0 0 #0c0c0c, inset 0 2px 0 0 #393939;
`;

const DeepSection = ({ className, children }) => (
  <StyledDeepSection className={className}>
    {children}
  </StyledDeepSection>
);

export default DeepSection;
