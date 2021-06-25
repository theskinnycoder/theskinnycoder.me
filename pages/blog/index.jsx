import { ArticleItem } from '../../components/Articles';
import { GET_ALL_ARTICLES } from '../../graphql/articles';
import { graphcms } from '../../utils';

const Blog = ({ articles }) => {
  return (
    <section className='dark:bg-black dark:text-white pt-28 flex flex-col items-center justify-center min-h-screen px-3 py-10 text-left'>
      <h2 className='md:text-4xl text-3xl text-center'>
        The <span className='font-bold text-pink-600 uppercase'>Blog</span>
      </h2>
      <h4 className='px-2 mt-2 text-xl leading-tight text-center'>
        Here is where I post & publish my technical articles, cheatsheets, YouTube supplements &
        rants...
      </h4>
      <section className='sm:grid-cols-2 grid grid-cols-1 gap-5 mt-10'>
        {articles?.map((article, idx) => (
          <ArticleItem key={idx} article={article} />
        ))}
      </section>
    </section>
  );
};

export const getStaticProps = async () => {
  const { articles } = await graphcms.request(GET_ALL_ARTICLES);

  return {
    props: {
      articles,
    },
    revalidate: 3600,
  };
};

export default Blog;
