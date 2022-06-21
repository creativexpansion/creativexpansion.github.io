import styled from "styled-components";
import Separator from "./Separator";

const StyledFooter = styled.div`
  color: #707070;
  font-size: 14px;
  a {
    margin-right: 20px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Separator margin="43px 0 20px" />
      Tutti i diritti sono riservati - <a href="/" target="_blank">creativexpansion.com</a>
    </StyledFooter>
  );
};

export default Footer;
