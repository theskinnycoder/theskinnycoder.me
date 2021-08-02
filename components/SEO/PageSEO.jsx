import { capitalize } from '@/utils/helperFunctions';
import { NextSeo } from 'next-seo';

const PageSEO = ({ name, description }) => {
  const url = `https://theskinnycoder.me/${name === 'home' ? '' : name}}`;
  const title = `${capitalize(name)} | TheSkinnyCoder`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
  );
};

export default PageSEO;
