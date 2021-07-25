import getData from './getData';
import { GET_ALL_ARTICLES } from './queries';

export function capitalize(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

export function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export async function getAllPostSlugs() {
  const { articles } = await getData({
    url: 'https://api-eu-central-1.graphcms.com/v2/ckq6frt2kcdgb01z00tned1ty/master',
    query: GET_ALL_ARTICLES,
  });

  return articles.map((article) => article.slug);
}
