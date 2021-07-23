import NextImage from 'next/image';

export default function CoverPic({ pic }) {
  const { url, height, width, fileName } = pic;
  return (
    <div className='pt-5'>
      <NextImage src={url} alt={fileName} width={width} height={height} />
    </div>
  );
}
