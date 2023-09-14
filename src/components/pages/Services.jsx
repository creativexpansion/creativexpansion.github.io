import { useEffect } from "react";
import styled from "styled-components";
import graphicS008_it from "../../assets/images/services/graphicS008_it.jpg";
import graphicS008_en from "../../assets/images/services/graphicS008_en.jpg";
import PageContainer from "../PageContainer";
import { titlePrefix } from "../utils";
import { useTranslation } from "react-i18next";

const StyledServices = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const image = {
  it: graphicS008_it,
  en: graphicS008_en,
};

const Services = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = titlePrefix + "servizi";
  }, []);

  return (
    <PageContainer>
      <StyledServices>
        <img src={image[i18n.language.slice(0, 2)]} alt="welcome" />
      </StyledServices>
    </PageContainer>
  );
};

export default Services;
