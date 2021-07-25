import useView from '@hooks/useView';
import dynamic from 'next/dynamic';
const ArticleItem = dynamic(() => import('@components/Articles/ArticleItem'));

export default function RecentArticles({ articles }) {
  const { observe, inView } = useView();

  return (
    <div className='dark:bg-black dark:text-light min-h-screen'>
      <section className='flex flex-col items-center justify-center w-full py-10 mx-auto text-center'>
        <h2 className='md:text-5xl text-4xl'>
          Recently on my <span className='font-bold text-pink-600'>blog</span>
          ...
        </h2>
        <section className='lg:grid-cols-2 grid grid-cols-1 gap-8 mx-auto mt-10'>
          {articles?.map((article, idx) => (
            <div ref={observe} key={idx}>
              {inView && <ArticleItem article={article} />}
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
