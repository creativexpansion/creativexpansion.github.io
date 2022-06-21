import styled from "styled-components";

const StyledSeparator = styled.div`
  display: flex;
  flex-direction: column;
  background: #333333;
  box-shadow: inset 0 2px 0 0 #1b1b1b;
  width: 100%;
  height: 3px;
  border-radius: 4px;
  margin: ${({ margin }) => margin};
`;

const Separator = ({ margin }) => <StyledSeparator margin={margin} />;

export default Separator;
