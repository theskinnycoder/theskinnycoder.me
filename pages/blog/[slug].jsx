import { ArticleSkeleton } from '@components/Articles';
import { BlogSEO } from '@components/Blog';
import BlogLayout from '@layouts/BlogLayout';
import graphcms from '@utils/graphcms';
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
}

export async function getStaticProps({ params }) {
  const { article } = await graphcms.request(GET_SINGLE_ARTICLE, {
    slug: params.slug,
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
