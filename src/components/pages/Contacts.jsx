import styled from "styled-components";
import contact003 from "../../assets/images/contacts/contact003.jpg";
import PageContainer from "../PageContainer";
import Separator from "../Separator";

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
  return (
    <PageContainer>
      <StyledContacts>
        <p className="email">
          <span>marco ciacco - </span>
          <a href="mailto:creativexpansionart@gmail.com">
            creativexpansionart@gmail.com
          </a>
        </p>
        <Separator margin="5px 0 30px" />
        <div className="contactsImage">
          <img src={contact003} alt="contacts" />
        </div>
      </StyledContacts>
    </PageContainer>
  );
};

export default Contacts;
