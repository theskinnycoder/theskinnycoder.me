import { Intro, Timeline, Uses } from '../../components/About';

const About = () => {
  return (
    <div className='dark:bg-dark dark:divide-gray-600 flex-col px-3 bg-white divide-y divide-gray-300'>
      <Intro />
      <Uses />
      <Timeline />
    </div>
  );
};

export default About;
