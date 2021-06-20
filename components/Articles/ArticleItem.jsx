import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

const ArticleItem = ({ post }) => {
  return (
    <div className='group hover:-translate-y-1 hover:shadow-2xl dark:bg-dark dark:ring-1 dark:ring-light dark:text-light dark:shadow-none dark:hover:shadow-2xl bg-light w-10/12 h-auto mx-auto transition duration-300 ease-in-out transform rounded-lg rounded-t-none shadow-xl'>
      <Link href={`/blog/${post.fields.slug}`}>
        <a>
          <article className='flex flex-col'>
            <Image
              src={`https:${post.fields.coverPic.fields.file.url}`}
              alt={post.fields.coverPic.fields.file.url}
              width={post.fields.coverPic.fields.file.details.image.width}
              height={post.fields.coverPic.fields.file.details.image.height}
            />
            <div className='flex flex-col p-4'>
              <h1 className='line-clamp-2 text-3xl font-semibold capitalize'>
                {post.fields.title}
              </h1>
              <p className='dark:text-gray-400 my-2 text-sm font-medium text-gray-600'>
                Published{' '}
                {formatDistanceToNow(new Date(post.fields.publishedAt.split('-')), {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </p>
              <p className='line-clamp-3 dark:text-gray-200 flex-grow mt-2 font-medium text-gray-700'>
                {post.fields.excerpt}
              </p>
            </div>
          </article>
        </a>
      </Link>
    </div>
  );
};

export default ArticleItem;
