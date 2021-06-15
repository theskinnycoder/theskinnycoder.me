const ImageComponent = ({ src, alt }) => {
  if (!src.startsWith('https:') && !src.startsWith('http:')) src = `https:${src}`;
  return (
    <img
      src={`${src}`}
      alt={alt}
      className='dark:ring-1 dark:ring-light flex items-center justify-center mx-auto my-3.5'
    />
  );
};

export default ImageComponent;
