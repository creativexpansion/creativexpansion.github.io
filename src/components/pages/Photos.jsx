import styled from "styled-components";
import matite001 from "../../assets/images/portfolio/photos/matite001.jpg";
import mare002 from "../../assets/images/portfolio/photos/mare002.jpg";
import mare003 from "../../assets/images/portfolio/photos/mare003.jpg";
import mare004 from "../../assets/images/portfolio/photos/mare004.jpg";
import newYork005 from "../../assets/images/portfolio/photos/newYork005.jpg";
import mixer006 from "../../assets/images/portfolio/photos/mixer006.jpg";
import piatto007 from "../../assets/images/portfolio/photos/piatto007.jpg";
import tunisi008 from "../../assets/images/portfolio/photos/tunisi008.jpg";
import alberi009 from "../../assets/images/portfolio/photos/alberi009.jpg";
import cielo010 from "../../assets/images/portfolio/photos/cielo010.jpg";
import Carousel from "../Carousel";
import { useEffect } from "react";
import { titlePrefix } from "../utils";
const StyledPhotos = styled.div``;

const images = [
  matite001,
  mare002,
  mare003,
  mare004,
  newYork005,
  mixer006,
  piatto007,
  tunisi008,
  alberi009,
  cielo010,
];

const Photos = () => {
  useEffect(() => {
    document.title = titlePrefix + 'Portfolio | Foto Immagine';
  }, []);
  return (
    <StyledPhotos>
      <Carousel images={images} />
    </StyledPhotos>
  );
};

export default Photos;
