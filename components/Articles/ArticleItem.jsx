import { formatDistanceToNow } from 'date-fns';
import NextImage from 'next/image';
import NextLink from 'next/link';

export default function ArticleItem({ article }) {
  const { slug, title, excerpt, coverpic, updatedAt, categories } = article;

  return (
    <div className="group hover:-translate-y-1 hover:shadow-2xl dark:bg-black dark:bg-opacity-95 dark:text-white dark:shadow-none dark:hover:shadow-2xl bg-light dark:ring-1 dark:ring-pink-600 w-10/12 h-full mx-auto text-left transition duration-300 ease-in-out transform shadow-xl">
      <NextLink href={`/blog/${slug}`}>
        <a>
          <article className="flex flex-col">
            <NextImage
              src={`${coverpic.url}`}
              alt={coverpic.fileName}
              width={coverpic.width}
              height={coverpic.height}
            />
            <div className="flex flex-wrap justify-start items-center px-4 pt-4 space-x-3 text-xs text-center border-t-[1px] dark:border-pink-600 border-light">
              {categories.map((category, idx) => (
                <NextLink href={`/blog/categories/${category.name}`} key={idx}>
                  <a
                    style={{
                      backgroundColor: category.color.hex,
                    }}
                    className="hover:-translate-y-0.5 p-[3px] font-semibold text-black border-[1px] border-black dark:border-transparent transition duration-300 ease-in-out rounded-sm"
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
