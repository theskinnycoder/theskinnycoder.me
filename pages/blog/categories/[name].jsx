import { ArticleSkeleton } from '@/components/skeletons';
import { BlogLayout } from '@/layouts';
import { CategorySEO } from '@/seo';
import fetcher from '@/utils/fetcher';
import { getAllArticleCategories } from '@/utils/helperFunctions';
import {
  GET_ALL_ARTICLES_BY_CATEGORY,
  GET_ALL_CATEGORIES,
} from '@/utils/queries';

const BlogCategoryPage = ({ currentCategory, categories }) => {
  if (!currentCategory) return <ArticleSkeleton />;

  const { name, color, articles } = currentCategory;

  return (
    <>
      <CategorySEO category={currentCategory} />
      <BlogLayout
        kind="categories"
        name={name}
        color={color}
        articles={articles}
        categories={categories}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const names = await getAllArticleCategories();

  const paths = names.map((name) => ({
    params: { name },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { category: currentCategory } = await fetcher({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_ARTICLES_BY_CATEGORY,
    variables: { name: params.name },
  });

  const { categories } = await fetcher({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_CATEGORIES,
  });

  return {
    props: {
      currentCategory,
      categories,
    },
    revalidate: 86400,
  };
};

export default BlogCategoryPage;
