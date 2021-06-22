import NextImage from 'next/image';

const CoverPic = ({ pic }) => {
  const { url, height, width, fileName } = pic;
  return (
    <div className='dark:ring-1 dark:ring-light'>
      <NextImage src={`${url}`} alt={fileName} width={width} height={height} />
    </div>
  );
};

export default CoverPic;
