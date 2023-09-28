import PropTypes from "prop-types";

const ImageShow = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};
ImageShow.propTypes = {
  image: PropTypes.object,
};
export default ImageShow;
