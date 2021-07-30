import { ArticleSkeleton } from '@components/Articles';
import BlogLayout from '@layouts/BlogLayout';
import getData from '@utils/getData';
import {
  GET_ALL_ARTICLES_BY_CATEGORY,
  GET_ALL_CATEGORIES,
} from '@utils/queries';

export default function BlogCategoryPage({ currentCategory, categories }) {
  if (!currentCategory) return <ArticleSkeleton />;

  const { name, color, articles } = currentCategory;

  return (
    <>
      <BlogLayout
        kind="categories"
        name={name}
        color={color}
        articles={articles}
        categories={categories}
      />
    </>
  );
}

export async function getStaticPaths() {
  const { categories } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_CATEGORIES,
  });

  const paths = categories
    .map((category) => category.name)
    .map((name) => ({ params: { name } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { category: currentCategory } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_ARTICLES_BY_CATEGORY,
    variables: { name: params.name },
  });

  const { categories } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_CATEGORIES,
  });

  return {
    props: {
      currentCategory,
      categories,
    },
    revalidate: 3600,
  };
}
