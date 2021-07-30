import { Intro, Timeline, Uses } from '@components/About';
import { PageSEO } from '@components/SEO';

export default function About() {
  return (
    <>
      <PageSEO
        name="about"
        description="Here is what tools I use, my developer timeline, my scoial media handles etc."
      />
      <div className="dark:bg-black flex-col bg-white divide-y divide-pink-300">
        <Intro />
        <Uses />
        <Timeline />
      </div>
    </>
  );
}
