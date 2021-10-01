import useSearch from '@/hooks/useSearch';
import { isSingular } from '@/utils/helperFunctions';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
const ArticleItem = dynamic(() => import('@/components/Articles/ArticleItem'), {
  ssr: false,
});

const BlogLayout = ({
  kind = 'articles',
  articles,
  categories,
  name = null,
  color = null,
}) => {
  const { searchText, setSearchText } = useSearch();
  const [searchedArticles, setSearchedArticles] = useState(articles);
  const onlyOne = isSingular(searchedArticles);

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
    <section className="dark:bg-black dark:text-white flex flex-col items-center justify-start min-h-screen py-10 text-left">
      <h2 className="md:text-4xl text-3xl text-center">
        The <span className="font-bold text-pink-600 uppercase">Blog</span>
      </h2>
      <h4 className="px-3 mt-2 text-xl leading-tight text-center">
        {kind === 'categories' ? (
          <>
            Showing {searchedArticles?.length}{' '}
            {onlyOne ? 'article' : 'articles'} about{' '}
            <motion.span
              layoutId={name}
              style={{
                backgroundColor: color.hex,
              }}
              className={`px-[1.75px] dark:px-[1.5px] font-semibold text-black dark:border-transparent rounded-sm py-0 ml-[1px] ${
                color.hex === '#ffffff' && 'border-[1px] border-black'
              }`}
            >
              #{name}
            </motion.span>
          </>
        ) : (
          <>
            Here is where I post &amp; publish my technical articles,
            cheatsheets, YouTube supplements &amp; rants...
          </>
        )}
      </h4>
      <div className="w-full mx-auto my-5 text-center">
        <input
          type="text"
          name="search"
          value={searchText}
          autoComplete="off"
          placeholder="Search for articles..."
          onChange={(e) => setSearchText(e.target.value)}
          className="searchbar focus:outline-none md:w-3/4 w-10/12 p-3 text-lg font-medium dark:bg-[#111111] outline-none bg-white focus:ring-4 ring-pink-600 ring-2"
        />
        {kind !== 'categories' && (
          <span className="md:inline-block md:ml-4 md:mt-0 block mt-4 ml-0 text-lg font-medium">
            (Showing{' '}
            <span className="font-bold text-pink-600">
              {searchedArticles.length}
            </span>{' '}
            {onlyOne ? 'article' : 'articles'})
          </span>
        )}
      </div>
      <div className="md:px-5 flex items-start justify-center px-0 py-4 mt-10">
        <div className="md:w-1/5 md:flex flex-col items-start justify-center hidden w-0 space-y-3">
          {categories?.map((category, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: (idx) => ({ y: -50 * idx, opacity: 0 }),
                visible: (idx) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: idx * 0.1 },
                }),
              }}
              custom={idx}
              initial="hidden"
              animate="visible"
            >
              <NextLink href={`/blog/categories/${category.name}`} passHref>
                <motion.a
                  layoutId={category.name}
                  style={{
                    backgroundColor: category.color.hex,
                  }}
                  className={`hover:tracking-wider p-[3px] font-semibold text-black dark:border-transparent transition-all duration-200 ease-in-out rounded-sm text-sm lg:text-base ${
                    category.color.hex === '#ffffff' &&
                    'border-[1px] border-black'
                  }`}
                  key={idx}
                >
                  #{category.name}
                </motion.a>
              </NextLink>
            </motion.div>
          ))}
        </div>
        <section className="sm:grid-cols-2 md:w-4/5 grid w-full grid-cols-1 gap-5">
          <AnimatePresence exitBeforeEnter>
            {searchedArticles.length !== 0 ? (
              searchedArticles.map((article, idx) => (
                <motion.div layout key={idx}>
                  <ArticleItem article={article} />
                </motion.div>
              ))
            ) : (
              <motion.h3
                className="block w-full text-4xl text-center"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.1 }}
                transition={{ duration: 0.1, type: 'spring' }}
              >
                Dude, I didn&apos;t write about that yet...
              </motion.h3>
            )}
          </AnimatePresence>
        </section>
      </div>
    </section>
  );
};

export default BlogLayout;
