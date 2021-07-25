import { ArticleSkeleton } from '@components/Articles';
import { BlogSEO } from '@components/SEO';
import BlogLayout from '@layouts/BlogLayout';
import getData from '@utils/getData';
import { GET_ALL_ARTICLES, GET_SINGLE_ARTICLE } from '@utils/queries';

export default function BlogDetails({ article }) {
  if (!article) return <ArticleSkeleton />;
  return (
    <>
      <BlogSEO article={article} />
      <BlogLayout article={article} />
    </>
  );
}

export async function getStaticPaths() {
  const { articles } = await getData({
    url: 'https://api-eu-central-1.graphcms.com/v2/ckq6frt2kcdgb01z00tned1ty/master',
    query: GET_ALL_ARTICLES,
  });

  const paths = articles.map(({ slug }) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { article } = await getData({
    url: 'https://api-eu-central-1.graphcms.com/v2/ckq6frt2kcdgb01z00tned1ty/master',
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
    revalidate: 3600,
  };
}
