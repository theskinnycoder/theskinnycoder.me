import { useView } from '@/hooks';
import dynamic from 'next/dynamic';
import uses from './usesData';
const UsesCard = dynamic(() => import('./UsesCard'), { ssr: false });

const UsesSection = () => {
  const { observe, inView } = useView();
  return (
    <section
      className="dark:text-brand-light dark:bg-black lg:min-h-screen flex items-center justify-center min-h-full px-3 py-5"
      id="gear"
    >
      <div className="container p-3 mx-auto text-center">
        <h3 className="md:text-5xl mb-4 text-3xl">
          These are the <span className="text-brand font-bold">tools</span> 🔨 I{' '}
          <span className="text-brand font-bold">use</span> to build stuff...
        </h3>
        <p className="md:text-xl text-lg">
          Good tools will make you a good developer. But the right tools will
          make you a <span className="font-bold">professional</span> developer
        </p>
        <div className="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-5 mx-auto mt-10">
          {uses.map((usesSection, idx) => (
            <div ref={observe} key={idx}>
              {inView && <UsesCard usesSection={usesSection} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsesSection;
