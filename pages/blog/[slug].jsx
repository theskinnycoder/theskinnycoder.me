import Markdown from 'markdown-to-jsx';
import { useRouter } from 'next/router';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
import { ArticleSkeleton } from '../../components/Articles';
import { CoverPic, DateAndTimeTaken, SocialShareButtons } from '../../components/Blog';
import client from '../../utils/client';
import useStore from '../../utils/store';

const BlogDetails = ({ post }) => {
  const darkmode = useStore((state) => state.darkmode);
  if (!post) return <ArticleSkeleton />;
  const router = useRouter();

  const { title, excerpt, content, publishedAt, coverPic } = post.fields;

  return (
    <div className='dark:bg-dark dark:text-light pt-9'>
      <article className='container flex flex-col max-w-5xl mx-auto text-center'>
        <div className='flex flex-col p-4'>
          {/* Title */}
          <h1 className='md:text-7xl text-6xl font-bold capitalize'>{title}</h1>

          {/* Excerpt */}
          <p className='md:text-xl dark:text-light my-4 text-lg font-semibold text-center text-black'>
            {excerpt}
          </p>

          {/* Flex under the Excerpt */}
          <div className='md:flex-row flex flex-col items-center justify-between mb-6 space-x-5'>
            {/* Date & Time Taken */}
            <DateAndTimeTaken content={content} publishedAt={publishedAt} />
            {/* Share Buttons */}
            <SocialShareButtons
              title={`${title} by TSC`}
              hashtag='theskinnycoder'
              path={router.asPath}
            />
          </div>

          {/* Cover Pic */}
          <CoverPic fields={coverPic.fields} />

          {/* The Content */}
          <Markdown
            className='xl:prose-xl lg:prose-lg dark:text-light mx-auto mt-8 prose-sm prose text-left text-black'
            options={{
              overrides: {
                h1: (props) => <h1 {...props} className='dark:text-light' />,
                h2: (props) => <h2 {...props} className='dark:text-light' />,
                h3: (props) => <h3 {...props} className='dark:text-light' />,
                h4: (props) => <h4 {...props} className='dark:text-light' />,
                blockquote: (props) => <blockquote {...props} className='dark:text-light' />,
                pre: (props) => (
                  <SyntaxHighlighter
                    codeTagProps={{
                      style: { fontSize: '16px', fontFamily: 'JetBrains Mono, monospace' },
                    }}
                    lineProps={{
                      style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
                    }}
                    className='dark:text-light'
                    children={props.children.props.children}
                    language={props.children.props.className?.slice(5)}
                    style={darkmode ? nord : prism}
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
  const response = await client.getEntries({ content_type: 'article' });

  const paths = response.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { post: items[0] },
    revalidate: 3600,
  };
};

export default BlogDetails;
