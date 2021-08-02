import getData from './getData';
import { GET_ALL_ARTICLES, GET_ALL_CATEGORIES } from './queries';

export const capitalize = (text) =>
  text
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

export const getRandomInRange = (min, max) => Math.random() * (max - min) + min;

export const isSingular = (arr) => arr.length === 1;

export const isAnArticle = (path) =>
  path.includes('blog/') && !path.includes('categories');

export const getAllPostSlugs = async () => {
  const { articles } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_ARTICLES,
  });

  return articles.map((article) => article.slug);
};

export const getAllArticleCategories = async () => {
  const { categories } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_CATEGORIES,
  });

  return categories.map((category) => category.name);
};
