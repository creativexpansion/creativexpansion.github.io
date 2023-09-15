import styled from "styled-components";
import contact006 from "../../assets/images/contacts/contact006.jpg";
import PageContainer from "../PageContainer";
import Separator from "../Separator";
import { titlePrefix } from "../utils";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const StyledContacts = styled.div`
  .contactsImage {
    width: 100%;

    img {
      width: 100%;
    }
  }
  .email {
    margin-top: -30px;
    & > span {
      color: #009ee1;
    }
  }
  @media (max-width: 880px) {
    .email {
      text-align: center;
    }
  }
`;

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Helmet>
        <title>{`${titlePrefix}${t('header.menu.contact')}`}</title>
      </Helmet>
      <StyledContacts>
        <p className="email">
          <span>marco ciacco - </span>
          <a href="mailto:creativexpansionart@gmail.com">
            creativexpansionart@gmail.com
          </a>
        </p>
        <Separator margin="5px 0 30px" />
        <div className="contactsImage">
          <img src={contact006} alt="contacts" />
        </div>
      </StyledContacts>
    </PageContainer>
  );
};

export default Contacts;
