import Markdown from 'markdown-to-jsx';
import { useRouter } from 'next/router';
import { ArticleSkeleton } from '../../components/Articles';
import {
  CodeBlock,
  CoverPic,
  DateAndTimeTaken,
  ImageComponent,
  SocialShareButtons,
} from '../../components/Blog';
import { GET_ALL_ARTICLES, GET_SINGLE_ARTICLE } from '../../graphql/articles';
import { graphcms } from '../../utils';

const BlogDetails = ({ article }) => {
  if (!article) return <ArticleSkeleton />;
  const router = useRouter();

  const { title, excerpt, content, updatedAt, coverpic } = article;

  return (
    <div className='dark:bg-dark dark:text-light py-10 pt-20'>
      <article className='flex flex-col text-center'>
        <div className='flex flex-col p-4'>
          {/* Title */}
          <h1 className='md:text-6xl text-5xl font-bold capitalize'>{title}</h1>

          {/* Excerpt */}
          <p className='md:text-lg dark:text-gray-400 text-md my-4 font-medium text-center text-gray-600'>
            {excerpt}
          </p>

          {/* Flex under the Excerpt */}
          <div className='md:flex-row flex flex-col items-center justify-between mb-6 space-x-5'>
            {/* Date & Time Taken */}
            <DateAndTimeTaken content={content} updatedAt={updatedAt} />
            {/* Share Buttons */}
            <SocialShareButtons
              title={`${title} by TSC`}
              hashtag='theskinnycoder'
              path={router.asPath}
            />
          </div>

          {/* Cover Pic */}
          <CoverPic pic={coverpic} />

          {/* The Content */}
          <Markdown
            className='lg:prose-xl md:prose-lg dark:text-light max-w-5xl mx-auto mt-8 font-[490] prose text-left text-black'
            options={{
              overrides: {
                image: (props) => <ImageComponent {...props} />,
                img: (props) => <ImageComponent {...props} />,
                h1: (props) => <h1 {...props} className='dark:text-light' />,
                h2: (props) => <h2 {...props} className='dark:text-light' />,
                h3: (props) => <h3 {...props} className='dark:text-light' />,
                h4: (props) => <h4 {...props} className='dark:text-light' />,
                blockquote: (props) => <blockquote {...props} className='dark:text-light' />,
                pre: (props) => (
                  <CodeBlock
                    content={props.children.props.children}
                    language={props.children.props.className?.slice(5)}
                  />
                ),
                code: (props) => (
                  <code {...props} className='dark:text-light dark:bg-[#2E3440] bg-[#F5F2F0]' />
                ),
                strong: (props) => <strong {...props} className='dark:text-light' />,
                a: (props) => <a {...props} className='dark:text-light' />,
              },
            }}
          >
            {content}
          </Markdown>
        </div>
      </article>
    </div>
  );
};

export const getStaticPaths = async () => {
  const { articles } = await graphcms.request(GET_ALL_ARTICLES);

  const paths = articles.map(({ slug }) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { article } = await graphcms.request(GET_SINGLE_ARTICLE, { slug: params.slug });

  if (!article) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { article },
    revalidate: 3600,
  };
};

export default BlogDetails;
