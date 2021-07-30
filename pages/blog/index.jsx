import { ArticleItem } from '@components/Articles';
import { PageSEO } from '@components/SEO';
import useSearch from '@hooks/useSearch';
import getData from '@utils/getData';
import { GET_ALL_ARTICLES, GET_ALL_CATEGORIES } from '@utils/queries';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

export default function Blog({ articles, categories }) {
  const { searchText, setSearchText } = useSearch();
  const [searchedArticles, setSearchedArticles] = useState(articles);
  const isSingular = searchedArticles.length === 1;

  useEffect(() => {
    const posts = articles?.filter(
      (article) =>
        article.title?.toLowerCase().includes(searchText.toLowerCase()) ||
        article?.categories
          ?.map((category) => category.name)
          ?.some((name) => name.includes(searchText.toLowerCase())),
    );
    setSearchedArticles(posts);
  }, [articles, searchText]);

  return (
    <>
      <PageSEO
        name="blog"
        description="Here is where I post & publish my technical articles, cheatsheets, YouTube supplements & rants..."
      />
      <section className="dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen px-3 py-10 text-left">
        <h2 className="md:text-4xl text-3xl text-center">
          The <span className="font-bold text-pink-600 uppercase">Blog</span>
        </h2>
        <h4 className="px-2 mt-2 text-xl leading-tight text-center">
          Here is where I post & publish my technical articles, cheatsheets,
          YouTube supplements & rants...
        </h4>
        <div className="w-full px-2 mx-auto my-5 text-center">
          <input
            type="text"
            name="search"
            value={searchText}
            autoComplete="off"
            placeholder="Search for articles..."
            onChange={(e) => setSearchText(e.target.value)}
            className="searchbar focus:outline-none w-11/12 md:w-3/4 p-3 text-lg font-medium dark:bg-gray-800 border-[1px] border-pink-600 outline-none focus:border-2 bg-white"
          />
          <span className="md:inline-block md:ml-4 md:mt-0 block mt-4 ml-0 text-lg">
            (Showing {searchedArticles.length}{' '}
            {isSingular ? 'article' : 'articles'})
          </span>
        </div>
        <div className="md:px-5 flex items-start justify-center px-0 py-4 mt-10">
          <div className="md:w-1/5 md:flex flex-col items-start justify-center hidden w-0 space-y-3">
            {categories?.map((category, idx) => (
              <NextLink href={`/blog/categories/${category.name}`} key={idx}>
                <a
                  style={{
                    backgroundColor: category.color.hex,
                  }}
                  className="hover:tracking-wider p-[3.25px] dark:p-[3px] font-semibold text-black border-[1px] border-black dark:border-transparent transition-all duration-200 ease-in-out rounded-sm text-sm lg:text-base"
                  key={idx}
                >
                  #{category.name}
                </a>
              </NextLink>
            ))}
          </div>
          <section className="sm:grid-cols-2 md:w-4/5 grid w-full grid-cols-1 gap-5">
            {searchedArticles.length !== 0 ? (
              searchedArticles.map((article, idx) => (
                <ArticleItem article={article} key={idx} />
              ))
            ) : (
              <h3 className="block w-full text-4xl text-center">
                Dude, I didn't write about that yet...
              </h3>
            )}
          </section>
        </div>
      </section>
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
