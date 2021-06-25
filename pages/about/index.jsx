import { Intro, Timeline, Uses } from '../../components/About';

const About = () => {
  return (
    <div className='dark:bg-black flex-col px-3 bg-white divide-y divide-pink-300'>
      <Intro />
      <Uses />
      <Timeline />
    </div>
  );
};

export default About;
