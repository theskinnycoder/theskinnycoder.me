import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

const VideoItem = ({ video }) => {
  return (
    <div className='group hover:-translate-y-1 hover:shadow-2xl dark:bg-dark dark:ring-1 dark:ring-light dark:text-light bg-light w-10/12 h-auto mx-auto transition duration-300 ease-in-out transform rounded shadow-xl'>
      <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
        <a target='_blank'>
          <article className='flex flex-col'>
            <Image
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              height={video.snippet.thumbnails.high.height}
              width={video.snippet.thumbnails.high.width}
            />
            <div className='flex flex-col p-4'>
              <h1 className='line-clamp-2 text-3xl font-semibold capitalize'>
                {video.snippet.title}
              </h1>
              <p className='dark:text-gray-400 my-2 text-sm font-medium text-gray-600'>
                Published{' '}
                {formatDistanceToNow(new Date(video.snippet.publishedAt), {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </p>
              <p className='line-clamp-3 dark:text-gray-200 flex-grow mt-2 font-medium text-gray-700'>
                {video.snippet.description}
              </p>
            </div>
          </article>
        </a>
      </Link>
    </div>
  );
};

export default VideoItem;
