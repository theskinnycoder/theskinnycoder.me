import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

const ArticleItem = ({ article }) => {
  const { slug, title, excerpt, coverpic, updatedAt } = article;

  return (
    <div className='group hover:-translate-y-1 hover:shadow-2xl dark:bg-pink-600 dark:text-white dark:shadow-none dark:hover:shadow-2xl bg-light dark:ring-1 dark:ring-pink-600 w-10/12 h-auto mx-auto text-left transition duration-300 ease-in-out transform rounded-lg rounded-t-none shadow-xl'>
      <Link href={`/blog/${slug}`}>
        <a>
          <article className='flex flex-col'>
            <Image
              src={`${coverpic.url}`}
              alt={coverpic.fileName}
              width={coverpic.width}
              height={coverpic.height}
            />
            <div className='flex flex-col p-4'>
              <h1 className='line-clamp-2 text-2xl font-semibold capitalize'>{title}</h1>
              <p className='dark:text-pink-100 my-2 text-xs font-medium text-gray-600'>
                Published{' '}
                {formatDistanceToNow(new Date(updatedAt), {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </p>
              <p className='line-clamp-3 dark:text-pink-200 flex-grow mt-2 font-medium text-gray-700'>
                {excerpt}
              </p>
            </div>
          </article>
        </a>
      </Link>
    </div>
  );
};

export default ArticleItem;
