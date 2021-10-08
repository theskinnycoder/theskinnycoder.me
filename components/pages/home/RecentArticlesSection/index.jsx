import { useView } from '@/hooks';
import dynamic from 'next/dynamic';
const ArticleItem = dynamic(
  () => import('@/components/pages/blog/articles/ArticleItem'),
  {
    ssr: false,
  },
);

const RecentArticlesSection = ({ articles }) => {
  const { observe, inView } = useView();

  return (
    <div className="dark:bg-black dark:text-brand-light lg:min-h-screen min-h-full">
      <section className="flex flex-col items-center justify-center w-full py-10 mx-auto text-center">
        <h2 className="md:text-5xl text-4xl">
          Recently on my <span className="text-brand font-bold">blog</span>
          ...
        </h2>
        <section className="lg:grid-cols-2 grid grid-cols-1 gap-8 mx-auto mt-10">
          {articles?.map((article, idx) => (
            <div ref={observe} key={idx}>
              {inView && <ArticleItem article={article} />}
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default RecentArticlesSection;
