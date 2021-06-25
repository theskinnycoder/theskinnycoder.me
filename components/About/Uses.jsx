import UsesCard from './UsesCard';
import uses from './usesData';

const Uses = () => {
  return (
    <div
      className='dark:text-light dark:bg-black flex items-center justify-center min-h-screen p-2'
      id='tools'
    >
      <div className='container p-3 mx-auto text-center'>
        <h3 className='md:text-5xl text-3xl'>
          These are the <span className='font-bold text-pink-600'>tools</span> 🔨 I{' '}
          <span className='font-bold text-pink-600'>use</span> to build stuff...
        </h3>
        <div className='md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-5 mx-auto mt-10'>
          {uses.map((usesSection, idx) => (
            <UsesCard key={idx} usesSection={usesSection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uses;
