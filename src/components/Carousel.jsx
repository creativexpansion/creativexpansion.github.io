import { useState } from "react";
import styled from "styled-components";

const StyledCarousel = styled.div`
  width: calc(100% + 34px);
  margin: -17px;

  .thumbnails {
    width: calc(100% - 12px);
    display: flex;
    margin: 24px 6px 0;
    flex-wrap: wrap;
    img {
      pointer-events: all;
      max-width: 142px;
      border: 1px solid #333333;
      margin: 10px;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }

  .preview {
    display: block;
    position: relative;
    margin: 11px 17px 24px;
    width: calc(100% - 34px);
    img {
      margin: 0;
      width: 100%;
      border: 1px solid #333333;
    }
  }

  @media (max-width: 556px) {
    .thumbnails {
      margin: 0 6px;
      width: calc(100% - 34px);
      img {
        pointer-events: none;
        max-width: 100%;
        margin: 10px;
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }
    }
    .preview {
      display: none;
    }
  }

  @media (max-width: 370px) {
    .thumbnails {
      margin: 0 17px;
      width: calc(100% - 34px);
      img {
        margin: 17px 0;
      }
    }
  }
`;

const Carousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const selectImage = (imageIndex) => () => {
    setSelectedImage(imageIndex);
  };
  return (
    <StyledCarousel>
      <div className="thumbnails">
        {images.map((image, key) => (
          <img
            key={key}
            src={image}
            alt={"carousel slide " + (key + 1)}
            onClick={selectImage(key)}
          />
        ))}
      </div>
      <div className="preview">
        <img
          src={images[selectedImage]}
          alt={"carousel image #" + selectedImage}
        />
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
