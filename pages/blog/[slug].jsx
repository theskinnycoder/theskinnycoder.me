import { ArticleSkeleton } from '../../components/Articles';
import { GET_ALL_ARTICLES, GET_SINGLE_ARTICLE } from '../../graphql/articles';
import BlogLayout from '../../layouts/BlogLayout';
import { graphcms } from '../../utils';

const BlogDetails = ({ article }) => {
  if (!article) return <ArticleSkeleton />;

  return <BlogLayout article={article} />;
};

export const getStaticPaths = async () => {
  const { articles } = await graphcms.request(GET_ALL_ARTICLES);

  const paths = articles.map(({ slug }) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { article } = await graphcms.request(GET_SINGLE_ARTICLE, { slug: params.slug });

  if (!article) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { article },
    revalidate: 3600,
  };
};

export default BlogDetails;
