import NextImage from 'next/image';

const ImageComponent = (props) => {
  const { width, height, altText, alt, src } = props;
  return (
    <div className='flex items-center justify-center mx-auto my-3.5'>
      {height && width ? (
        <NextImage src={src} alt={altText} height={height} width={width} />
      ) : (
        <img src={src} alt={alt} className='dark:ring-1 ring-light' />
      )}
    </div>
  );
};

export default ImageComponent;
