import styled from "styled-components";
import { useTranslation } from "react-i18next";
import DeepSection from "./DeepSection";
import Logo from "../assets/logo.png";

const StyledFooter = styled.div`
  color: #707070;
  font-size: 14px;
  a {
    margin-right: 20px;
  }
  .deepSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 58px 0 45px;
    padding: 20px 45px 15px;

    & > div {
      display: flex;
      align-items: center;
    }

    img {
      height: 32px;
      margin-right: 15px;
    }

    .name {
      color: #009fe4;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <DeepSection className="deepSection">
        <div>
          <img alt="Creativexpansion Logo" src={Logo} />
          by{' '}<span className="name">marco ciacco</span>
        </div>
        <div>
          contatti: <a href="mailto:creativexpansionart@gmail.com">mailto:creativexpansionart@gmail.com</a>
        </div>
      </DeepSection>
      {t('footer.copyright')} - <a href="/" target="_blank">creativexpansion.com</a>
    </StyledFooter>
  );
};

export default Footer;
