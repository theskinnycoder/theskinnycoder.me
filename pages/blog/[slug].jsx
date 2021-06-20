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
import Comments from '../../components/Comments';
import client from '../../utils/client';

const BlogDetails = ({ post }) => {
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
          <p className='md:text-xl dark:text-gray-400 my-4 text-lg font-medium text-center text-gray-600'>
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
          <Comments />
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
