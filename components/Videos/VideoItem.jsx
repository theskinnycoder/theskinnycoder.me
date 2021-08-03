import { formatDistanceToNow } from 'date-fns';
import NextImage from 'next/image';
import NextLink from 'next/link';

const VideoItem = ({ video }) => {
  return (
    <div className="group hover:scale-105 hover:shadow-2xl dark:bg-black dark:bg-opacity-95 dark:text-white dark:shadow-none dark:hover:shadow-2xl bg-light dark:ring-2 dark:ring-pink-600 w-10/12 h-full mx-auto text-left transition duration-500 ease-in-out transform shadow-xl">
      <NextLink href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
        <a target="_blank">
          <article className="flex flex-col">
            <NextImage
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              height={video.snippet.thumbnails.high.height}
              width={video.snippet.thumbnails.high.width}
            />
            <div className="border-light dark:border-pink-600 flex flex-col p-4 border-t-2">
              <h1 className="line-clamp-2 text-2xl font-semibold capitalize">
                {video.snippet.title}
              </h1>
              <p className="dark:text-pink-100 my-2 text-xs font-medium text-gray-600">
                Published{' '}
                {formatDistanceToNow(new Date(video.snippet.publishedAt), {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </p>
              <p className="line-clamp-3 dark:text-pink-200 flex-grow mt-2 font-medium text-gray-700">
                {video.snippet.description}
              </p>
            </div>
          </article>
        </a>
      </NextLink>
    </div>
  );
};

export default VideoItem;
