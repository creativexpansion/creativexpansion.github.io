import styled from "styled-components";
import { useTranslation } from "react-i18next";
import DeepSection from "./DeepSection";
import Logo from "../assets/logo.png";

const StyledFooter = styled.div`
  color: #707070;
  font-size: 16px;
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
  .copyright {
    margin: 0 45px;
  }

  @media (max-width: 780px) {
    .deepSection {
      flex-direction: column;
      gap: 20px;
    }
    .copyright {
      text-align: center;
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
          by
          <span className="name" style={{ marginLeft: 5 }}>
            marco ciacco
          </span>
        </div>
        <div>
          contatti:
          <a
            href="mailto:creativexpansionart@gmail.com"
            style={{ marginLeft: 5 }}
          >
            mailto:creativexpansionart@gmail.com
          </a>
        </div>
      </DeepSection>
      <div className="copyright">
      {t("footer.copyright")} -{" "}
      <a href="/" target="_blank">
        creativexpansion.com
      </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
