import TimeineCard from './TimeineCard';
import timelineData from './timelineData';

const Timeline = () => {
  return (
    <div className='dark:bg-dark min-h-screen'>
      <div className='p-2 pt-10'>
        <h3 className='md:text-6xl dark:text-light text-4xl text-center'>
          My <span className='font-semibold'>Timeline</span>
        </h3>
        <div className='container w-full h-full mx-auto'>
          <div className='wrap relative h-full p-10 overflow-hidden'>
            {/* center-line */}
            <div className='dark:border-light left-1/2 sm:block absolute hidden h-full border border-black'></div>

            {timelineData.map((event, idx) => (
              <TimeineCard event={event} key={idx} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
