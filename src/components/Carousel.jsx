import Flickity from "react-flickity-component";
const Carousel = ({ images }) => {
  const flickityOptions = {
    initialIndex: 0,
  };
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate={false}
      static={false}
    >
      {images.map((image, key) => (
        <img key={key} src={image} alt={"carousel slide " + (key + 1)} />
      ))}
    </Flickity>
  );
};

export default Carousel;
