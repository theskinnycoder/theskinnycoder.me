import { useRouter } from 'next/router';
import { CoverPic, DateAndTimeTaken, SocialShareButtons } from '../components/Blog';
import ContentBlock from '../components/Blog/ContentBlock';

const BlogLayout = ({ article }) => {
  const router = useRouter();
  const { title, excerpt, content, updatedAt, coverpic } = article;

  return (
    <div className='dark:bg-dark dark:text-light px-3 py-10 pt-20'>
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
          <ContentBlock content={content} />
        </div>
      </article>
    </div>
  );
};

export default BlogLayout;
