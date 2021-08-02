import { formatDistanceToNow } from 'date-fns';
import NextImage from 'next/image';
import NextLink from 'next/link';

const ArticleItem = ({ article }) => {
  const { slug, title, excerpt, coverpic, updatedAt, categories } = article;

  return (
    <div className="group hover:scale-105 hover:shadow-2xl dark:bg-black dark:bg-opacity-95 dark:text-white dark:shadow-none dark:hover:shadow-2xl bg-light dark:ring-2 dark:ring-pink-600 w-10/12 h-full mx-auto text-left transition duration-500 ease-in-out transform shadow-xl">
      <article className="flex flex-col">
        <NextLink href={`/blog/${slug}`}>
          <a>
            <NextImage
              src={`${coverpic.url}`}
              alt={coverpic.fileName}
              width={coverpic.width}
              height={coverpic.height}
            />
          </a>
        </NextLink>
        <div className="dark:border-pink-600 border-light flex flex-wrap items-center justify-start px-4 pt-4 text-xs text-center border-t-2">
          {categories.map((category, idx) => (
            <NextLink href={`/blog/categories/${category.name}`} key={idx}>
              <a
                style={{
                  backgroundColor: category.color.hex,
                }}
                className={`border-[1px] hover:-translate-y-0.5 p-[3px] font-semibold text-black ${
                  category.color.hex === '#ffffff'
                    ? 'border-black dark:border-white'
                    : 'border-transparent'
                } transition duration-300 ease-in-out rounded-sm m-1`}
              >
                #{category.name}
              </a>
            </NextLink>
          ))}
        </div>
        <div className="flex flex-col p-4">
          <NextLink href={`/blog/${slug}`}>
            <a>
              <h1 className="line-clamp-2 text-2xl font-semibold capitalize">
                {title}
              </h1>
            </a>
          </NextLink>
          <p className="dark:text-light my-2 text-xs font-medium text-gray-600">
            Published{' '}
            {formatDistanceToNow(new Date(updatedAt), {
              addSuffix: true,
              includeSeconds: true,
            })}
          </p>
          <p className="line-clamp-3 dark:text-light flex-grow mt-2 font-medium text-gray-700">
            {excerpt}
          </p>
        </div>
      </article>
    </div>
  );
};

export default ArticleItem;
