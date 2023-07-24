import styled from "styled-components";
import Separator from "./Separator";
import { useTranslation } from "react-i18next";

const StyledFooter = styled.div`
  color: #707070;
  font-size: 14px;
  a {
    margin-right: 20px;
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <Separator margin="43px 0 20px" />
      {t('footer.copyright')} - <a href="/" target="_blank">creativexpansion.com</a>
    </StyledFooter>
  );
};

export default Footer;
