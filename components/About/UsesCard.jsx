export default function UsesCard({ usesSection }) {
  return (
    <div className='dark:bg-black hover:shadow-2xl hover:-translate-y-1 dark:ring-1 dark:ring-light bg-light flex flex-col items-center justify-start h-full p-2 space-y-2 transition duration-300 ease-in-out transform divide-y divide-pink-300 shadow-xl'>
      <h4 className='md:text-lg text-md p-2 font-medium text-pink-600 uppercase'>
        {usesSection.category}
      </h4>
      <div className='flex-col p-2 space-y-2'>
        {usesSection?.items?.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target='_blank'
            className='hover:bg-black dark:hover:bg-light dark:hover:text-black hover:text-light group text-md flex items-center p-1 font-semibold rounded'
          >
            {item.icon} {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
