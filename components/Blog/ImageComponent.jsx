const ImageComponent = ({ src, alt }) => {
  if (!src.startsWith('https:') && !src.startsWith('http:')) src = `https:${src}`;
  return (
    <div className='dark:border-2 dark:border-white flex items-center justify-center mx-auto my-3.5'>
      <img src={`${src}`} alt={alt} />
    </div>
  );
};

export default ImageComponent;
