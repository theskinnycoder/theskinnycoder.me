import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useInView from 'react-cool-inview';
import {
  ContentBlock,
  CoverPic,
  DateAndTimeTaken,
  SocialShareButtons,
} from '../components/Blog';
const Comments = dynamic(() => import('../components/Blog/Comments'));

export default function BlogLayout({ article }) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });
  const router = useRouter();
  const { title, excerpt, content, updatedAt, coverpic } = article;

  return (
    <div className='dark:bg-black dark:text-white pt-28 px-3 py-10'>
      <article className='flex flex-col text-center'>
        <div className='flex flex-col p-4'>
          {/* Title */}
          <h1 className='md:text-6xl text-4xl font-bold text-pink-600 capitalize'>
            {title}
          </h1>

          {/* Excerpt */}
          <p className='md:text-lg text-md my-4 font-medium text-center text-gray-500'>
            {excerpt}
          </p>

          {/* Flex under the Excerpt */}
          <div className='sm:flex-row flex flex-col items-center justify-between py-6'>
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

          <div ref={observe}>{inView && <Comments />}</div>
        </div>
      </article>
    </div>
  );
}
