import styled from "styled-components";
import foto_001 from "../../assets/images/portfolio/photos/foto_001.jpg"
import foto_002 from "../../assets/images/portfolio/photos/foto_002.jpg"
import foto_003 from "../../assets/images/portfolio/photos/foto_003.jpg"
import foto_004 from "../../assets/images/portfolio/photos/foto_004.jpg"
import foto_005 from "../../assets/images/portfolio/photos/foto_005.jpg"
import foto_006 from "../../assets/images/portfolio/photos/foto_006.jpg"
import foto_007 from "../../assets/images/portfolio/photos/foto_007.jpg"
import foto_008 from "../../assets/images/portfolio/photos/foto_008.jpg"
import foto_009 from "../../assets/images/portfolio/photos/foto_009.jpg"
import foto_010 from "../../assets/images/portfolio/photos/foto_010.jpg"
import foto_011 from "../../assets/images/portfolio/photos/foto_011.jpg"
import foto_012 from "../../assets/images/portfolio/photos/foto_012.jpg"
import foto_013 from "../../assets/images/portfolio/photos/foto_013.jpg"
import foto_014 from "../../assets/images/portfolio/photos/foto_014.jpg"
import foto_015 from "../../assets/images/portfolio/photos/foto_015.jpg"
import foto_016 from "../../assets/images/portfolio/photos/foto_016.jpg"
import foto_017 from "../../assets/images/portfolio/photos/foto_017.jpg"
import foto_018 from "../../assets/images/portfolio/photos/foto_018.jpg"
import foto_019 from "../../assets/images/portfolio/photos/foto_019.jpg"
import foto_020 from "../../assets/images/portfolio/photos/foto_020.jpg"
import foto_021 from "../../assets/images/portfolio/photos/foto_021.jpg"
import foto_022 from "../../assets/images/portfolio/photos/foto_022.jpg"
import foto_023 from "../../assets/images/portfolio/photos/foto_023.jpg"
import foto_024 from "../../assets/images/portfolio/photos/foto_024.jpg"
import foto_025 from "../../assets/images/portfolio/photos/foto_025.jpg"
import foto_026 from "../../assets/images/portfolio/photos/foto_026.jpg"
import { titlePrefix } from "../utils";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const StyledPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 58px;

  img {
    width: calc(33% - 36px);
  }

  @media (max-width: 798px) {
    img {
      width: calc(50% - 29px);
    }
  }

  @media (max-width: 480px) {
    justify-content: center;

    img {
      width: 100%;
      max-width: 331px;
    }
  }
`;

const images = [
  foto_001,
  foto_002,
  foto_003,
  foto_004,
  foto_005,
  foto_006,
  foto_007,
  foto_008,
  foto_009,
  foto_010,
  foto_011,
  foto_012,
  foto_013,
  foto_014,
  foto_015,
  foto_016,
  foto_017,
  foto_018,
  foto_019,
  foto_020,
  foto_021,
  foto_022,
  foto_023,
  foto_024,
  foto_025,
  foto_026,
];

const Photos = () => {
  const { t } = useTranslation();
  return (
    <StyledPhotos>
      <Helmet>
        <title>{`${titlePrefix}${t("header.menu.portfolio")} | ${t(
          "portfolio.menu.photoImage"
        )}`}</title>
      </Helmet>
        {images.map((image, key) => <img key={key} src={image} alt={`photo_${key}`} />)}
    </StyledPhotos>
  );
};

export default Photos;
