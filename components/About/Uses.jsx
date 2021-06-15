import UsesCard from './UsesCard';
import uses from './usesData';

const Uses = () => {
  return (
    <div
      className='dark:text-light dark:bg-dark flex items-center justify-center min-h-screen p-2'
      id='tools'
    >
      <div className='container p-3 mx-auto text-center'>
        <h3 className='md:text-6xl text-4xl'>
          These are the <span className='font-bold'>tools</span> 🔨 I{' '}
          <span className='font-bold'>use</span> to build stuff...
        </h3>
        <div className='lg:grid-cols-4 lg:w-full grid w-4/5 grid-cols-1 gap-5 mx-auto mt-10'>
          {uses.map((usesSection, idx) => (
            <UsesCard key={idx} usesSection={usesSection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uses;
