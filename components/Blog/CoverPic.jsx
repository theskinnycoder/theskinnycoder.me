import NextImage from 'next/image';

const CoverPic = ({ pic }) => {
  const { url, height, width, fileName } = pic;
  return (
    <div className="pt-5">
      <NextImage src={url} alt={fileName} width={width} height={height} />
    </div>
  );
};

export default CoverPic;
