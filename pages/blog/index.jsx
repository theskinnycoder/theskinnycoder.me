import { ArticleItem } from "../../components/Articles";
import client from "../../utils/client";

const Blog = ({ articles }) => {
  return (
    <div className="bg-tuna-100 bg-opacity-20 min-h-screen">
      <section className="flex flex-col items-center justify-center w-full py-20 mx-auto text-left">
        <div className="container mx-auto">
          <h2 className="text-6xl text-center">
            The <span className="font-bold uppercase">Blog</span>
          </h2>
          <h4 className="px-3 mt-2 text-2xl leading-tight text-center">
            Here is where I post & publish my technical articles, cheatsheets,
            YouTube supplements & rants...
          </h4>
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

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "article" });

  return {
    props: {
      articles: response.items
    },
    revalidate: 3600
  };
};

export default Blog;
