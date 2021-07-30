import { formatDistanceToNow } from 'date-fns';
import NextImage from 'next/image';
import NextLink from 'next/link';

export default function ArticleItem({ article }) {
  const { slug, title, excerpt, coverpic, updatedAt, categories } = article;

  return (
    <div className="group hover:-rotate-1 hover:shadow-2xl dark:bg-black dark:bg-opacity-95 dark:text-white dark:shadow-none dark:hover:shadow-2xl bg-light dark:border-2 dark:border-pink-600 w-10/12 h-full mx-auto text-left transition duration-300 ease-in-out transform shadow-xl">
      <NextLink href={`/blog/${slug}`}>
        <a>
          <article className="flex flex-col">
            <NextImage
              src={`${coverpic.url}`}
              alt={coverpic.fileName}
              width={coverpic.width}
              height={coverpic.height}
            />
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
              <h1 className="line-clamp-2 text-2xl font-semibold capitalize">
                {title}
              </h1>
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
        </a>
      </NextLink>
    </div>
  );
}
