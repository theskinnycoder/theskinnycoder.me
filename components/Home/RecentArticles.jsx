import { ArticleItem } from '../Articles/';

const RecentArticles = ({ articles }) => {
  return (
    <div className='dark:bg-dark dark:text-light min-h-screen'>
      <section className='flex flex-col items-center justify-center w-full py-10 mx-auto text-center'>
        <h2 className='md:text-5xl text-4xl'>
          Recently on my <span className='font-bold'>blog</span>
          ...
        </h2>
        <section className='lg:grid-cols-2 grid grid-cols-1 gap-8 mx-auto mt-10'>
          {articles?.map((article, idx) => (
            <ArticleItem key={idx} article={article} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default RecentArticles;
