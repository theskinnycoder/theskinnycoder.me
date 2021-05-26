import { ArticleItem } from "../Articles/";

const RecentArticles = ({ articles }) => {
  return (
    <div className="bg-tuna-100 bg-opacity-20 min-h-screen">
      <section className="flex flex-col items-center justify-center w-full py-20 mx-auto text-left">
        <div className="container mx-auto">
          <h2 className="md:text-6xl text-5xl text-center">
            Recently on my <span className="font-bold">blog</span>
            ...
          </h2>
          <section className="lg:grid-cols-2 grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-10">
            {articles?.map((post, idx) => (
              <ArticleItem key={idx} post={post} />
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default RecentArticles;
