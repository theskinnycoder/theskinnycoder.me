import NextImage from 'next/image';

const CoverPic = ({ pic }) => {
  const { url, height, width, fileName } = pic;
  return <NextImage src={url} alt={fileName} width={width} height={height} className='mt-5' />;
};

export default CoverPic;
