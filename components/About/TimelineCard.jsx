export default function TimelineCard({ event, idx }) {
  const { title, period, content } = event;
  return (
    <div className='hover:-translate-y-1 even:flex-row-reverse group even:text-white flex items-center justify-between w-full mb-8 text-black transition duration-300 ease-in-out transform'>
      <div className='order-1 w-5/12'></div>
      <div className='dark:bg-light sm:flex items-center order-1 hidden w-10 h-10 bg-black rounded-full shadow-2xl'>
        <h1 className='dark:text-black mx-auto text-xl font-semibold text-white'>
          {idx}
        </h1>
      </div>
      <div className='sm:w-5/12 hover:shadow-2xl bg-light group-even:bg-black dark:group-even:ring-1 dark:even:ring-pink-600 order-1 w-3/4 px-6 py-4 rounded-lg shadow-xl'>
        <h3 className='text-xl font-bold text-pink-600'>{title}</h3>
        <h4 className='mb-3 text-sm font-semibold'>{period}</h4>
        {content}
      </div>
    </div>
  );
}