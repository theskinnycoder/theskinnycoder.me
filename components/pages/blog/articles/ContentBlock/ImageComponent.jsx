const ImageComponent = ({ alt, src }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="flex items-center justify-center mx-auto my-3"
    />
  );
};

export default ImageComponent;
