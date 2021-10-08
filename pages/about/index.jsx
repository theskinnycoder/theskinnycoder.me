import {
  IntroSection,
  TimelineSection,
  UsesSection,
} from '@/components/pages/about';
import { PageSEO } from '@/seo';

const About = () => {
  return (
    <>
      <PageSEO
        name="about"
        description="Here is what tools I use, my developer timeline, my scoial media handles etc."
      />
      <div className="dark:bg-black divide-brand-divide flex-col bg-white divide-y">
        <IntroSection />
        <UsesSection />
        <TimelineSection />
      </div>
    </>
  );
};

export default About;
