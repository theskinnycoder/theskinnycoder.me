import Image from "next/image";

const CoverPic = ({ fields }) => {
  return (
    <Image
      src={`https:${fields.file.url}`}
      alt={fields.title}
      width={fields.file.details.image.width}
      height={fields.file.details.image.height}
    />
  );
};

export default CoverPic;
