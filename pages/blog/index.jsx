import { BlogLayout } from '@/layouts';
import { PageSEO } from '@/seo';
import fetcher from '@/utils/fetcher';
import { GET_ALL_ARTICLES, GET_ALL_CATEGORIES } from '@/utils/queries';

const Blog = ({ articles, categories }) => {
  return (
    <>
      <PageSEO
        name="blog"
        description="Here is where I post & publish my technical articles, cheatsheets, YouTube supplements & rants..."
      />
      <BlogLayout articles={articles} categories={categories} />
    </>
  );
};

export const getStaticProps = async () => {
  const { articles } = await fetcher({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_ARTICLES,
  });

  const { categories } = await fetcher({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_CATEGORIES,
  });

  return {
    props: {
      articles,
      categories,
    },
    revalidate: 86400,
  };
};

export default Blog;
