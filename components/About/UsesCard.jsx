const UsesCard = ({ usesSection }) => {
  return (
    <div className='dark:bg-dark hover:shadow-2xl hover:-translate-y-1 dark:ring-1 dark:ring-light bg-light dark:divide-gray-200 flex flex-col items-center justify-start p-2 space-y-2 transition duration-300 ease-in-out transform divide-y divide-black rounded shadow-xl'>
      <h4 className='md:text-2xl p-2 text-xl font-medium uppercase'>{usesSection.category}</h4>
      <div className='flex-col p-2 space-y-2'>
        {usesSection?.items?.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target='_blank'
            className='hover:bg-dark dark:hover:bg-light dark:hover:text-black hover:text-light group flex items-center p-1 text-lg font-semibold rounded'
          >
            {item.icon} {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UsesCard;