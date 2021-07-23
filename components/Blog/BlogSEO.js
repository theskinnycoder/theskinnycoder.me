import { ArticleJsonLd, NextSeo } from 'next-seo';

function capitalize(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

export default function BlogSEO({ article }) {
  const { slug, excerpt, updatedAt, coverpic } = article;

  const url = `https://theskinnycoder.me/blog/${slug}`;
  const description = excerpt;
  const title = `${capitalize(article.title)} | TheSkinnyCoder`;
  const date = new Date(updatedAt).toISOString();
  const featuredImage = {
    url: `https://theskinnycoder.me${coverpic}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName='TheSkinnyCoder'
        dateModified={date}
        datePublished={date}
        description={description}
        images={[featuredImage]}
        publisherLogo='/static/favicons/android-chrome-192x192.png'
        publisherName='TheSkinnyCoder'
        title={title}
        url={url}
      />
    </>
  );
}
