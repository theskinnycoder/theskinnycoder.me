import graphcms from '@utils/graphcms';
import { GET_ALL_ARTICLES } from '@utils/queries';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import useInView from 'react-cool-inview';
const ArticleItem = dynamic(() => import('@components/Articles/ArticleItem'));

export default function Blog({ articles }) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });
  const url = 'https://theskinnycoder.me/blog';
  const title = 'Blog | TheSkinnyCoder';
  const description =
    'Here is where I post & publish my technical articles, cheatsheets, YouTube supplements & rants...';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <section className='dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen px-3 py-10 text-left'>
        <h2 className='md:text-4xl text-3xl text-center'>
          The <span className='font-bold text-pink-600 uppercase'>Blog</span>
        </h2>
        <h4 className='px-2 mt-2 text-xl leading-tight text-center'>
          Here is where I post & publish my technical articles, cheatsheets,
          YouTube supplements & rants...
        </h4>
        <section className='sm:grid-cols-2 grid grid-cols-1 gap-5 mt-10'>
          {articles?.map((article, idx) => (
            <div ref={observe} key={idx}>
              {inView && <ArticleItem article={article} />}
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { articles } = await graphcms.request(GET_ALL_ARTICLES);

  return {
    props: {
      articles,
    },
    revalidate: 3600,
  };
}
