import { ArticleSkeleton } from '@/components/skeletons';
import { ArticleLayout } from '@/layouts';
import { ArticleSEO } from '@/seo';
import getData from '@/utils/getData';
import { getAllPostSlugs } from '@/utils/helperFunctions';
import { GET_SINGLE_ARTICLE } from '@/utils/queries';

const BlogDetails = ({ article }) => {
  if (!article) return <ArticleSkeleton />;
  return (
    <>
      <ArticleSEO article={article} />
      <ArticleLayout article={article} />
    </>
  );
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { article } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_SINGLE_ARTICLE,
    variables: { slug: params.slug },
  });

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
    revalidate: 86400,
  };
};

export default BlogDetails;
