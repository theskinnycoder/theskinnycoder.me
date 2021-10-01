import { Intro, Timeline, Uses } from '@/components/About';
import { PageSEO } from '@/components/SEO';

const About = () => {
  return (
    <>
      <PageSEO
        name="about"
        description="Here is what tools I use, my developer timeline, my scoial media handles etc."
      />
      <div className="dark:bg-black divide-brand-divide flex-col bg-white divide-y">
        <Intro />
        <Uses />
        <Timeline />
      </div>
    </>
  );
};

export default About;
