import TypeWriter from 'react-typing-effect';

const HeroSection = () => {
  return (
    <section className='dark:bg-dark dark:text-light flex flex-col items-center justify-center w-full h-screen p-2 mx-auto -mt-20 text-center'>
      <h1 className='md:text-9xl text-7xl uppercase'>
        The <span className='font-bold'>Skinny</span> Coder
      </h1>
      <h3 className='md:text-5xl mt-12 text-3xl'>
        <TypeWriter
          text={['Developer', 'YouTuber', 'Tutor']}
          eraseDelay={1000}
          eraseSpeed={110}
          typingDelay={250}
          speed={110}
        />
      </h3>
    </section>
  );
};

export default HeroSection;
