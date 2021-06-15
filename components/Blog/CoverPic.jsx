import Image from 'next/image';

const CoverPic = ({ fields }) => {
  return (
    <div className='dark:ring-1 dark:ring-light'>
      <Image
        src={`https:${fields.file.url}`}
        alt={fields.title}
        width={fields.file.details.image.width}
        height={fields.file.details.image.height}
      />
    </div>
  );
};

export default CoverPic;
