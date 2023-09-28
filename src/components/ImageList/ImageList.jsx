import PropTypes from "prop-types";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
};
ImageList.propTypes = {
  images: PropTypes.array,
};
export default ImageList;
