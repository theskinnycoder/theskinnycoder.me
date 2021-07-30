import { PageSEO } from '@components/SEO';
import BlogLayout from '@layouts/BlogLayout';
import getData from '@utils/getData';
import { GET_ALL_ARTICLES, GET_ALL_CATEGORIES } from '@utils/queries';

export default function Blog({ articles, categories }) {
  return (
    <>
      <PageSEO
        name="blog"
        description="Here is where I post & publish my technical articles, cheatsheets, YouTube supplements & rants..."
      />
      <BlogLayout articles={articles} categories={categories} />
    </>
  );
}

export async function getStaticProps() {
  const { articles } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_ARTICLES,
  });

  const { categories } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_CATEGORIES,
  });

  return {
    props: {
      articles,
      categories,
    },
    revalidate: 3600,
  };
}
