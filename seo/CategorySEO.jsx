import { NextSeo } from 'next-seo';

const CategorySEO = ({ category }) => {
  const url = `https://theskinnycoder.me/blog/${category.name}`;
  const description = `Articles with #${category.name} tag`;
  const title = `#${category.name} | Blog |TheSkinnyCoder`;

  return (
    <>
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
    </>
  );
};

export default CategorySEO;
