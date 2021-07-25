import useView from '@hooks/useView';
import dynamic from 'next/dynamic';
import timelineData from './timelineData';
const TimelineCard = dynamic(() => import('./TimelineCard'));

export default function Timeline() {
  const { observe, inView } = useView();
  return (
    <section className='dark:bg-black min-h-screen' id='timeline'>
      <div className='p-2 pt-10'>
        <h3 className='md:text-5xl dark:text-white text-3xl text-center'>
          My <span className='font-semibold text-pink-600'>Timeline</span>
        </h3>
        <div className='container w-full h-full mx-auto'>
          <div
            className='wrap relative h-full p-10 overflow-hidden'
            ref={observe}
          >
            {/* center-line */}
            <div className='left-1/2 sm:block absolute hidden h-full border border-pink-600'></div>
            {timelineData.map((event, idx) => {
              return (
                inView && (
                  <TimelineCard
                    key={idx}
                    event={event}
                    idx={timelineData.length - idx - 1}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
