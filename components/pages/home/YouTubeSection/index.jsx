import { useView } from '@/hooks';
import dynamic from 'next/dynamic';
const VideoItem = dynamic(() => import('./VideoItem'), {
  ssr: false,
});

const YouTubeSection = ({ videos }) => {
  const { observe, inView } = useView();
  return (
    <div className="dark:bg-black dark:text-brand-light lg:min-h-screen min-h-full">
      <section className="flex flex-col items-center justify-center w-full py-10 mx-auto text-center">
        <h2 className="md:text-5xl text-4xl">
          Recently on my{' '}
          <span className="text-brand font-bold">YouTube Channel</span>
          ...
        </h2>
        <section className="lg:grid-cols-2 grid grid-cols-1 gap-8 mx-auto mt-10">
          {videos?.map((video, idx) => (
            <div ref={observe} key={idx}>
              {inView && <VideoItem video={video} />}
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default YouTubeSection;
