import { Intro, Timeline, Uses } from '@components/About';
import { NextSeo } from 'next-seo';

export default function About() {
  const url = 'https://theskinnycoder.me/about';
  const title = 'About | TheSkinnyCoder';
  const description =
    'Here is what tools I use, my developer timeline, my scoial media handles etc.';
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className='dark:bg-black flex-col px-3 bg-white divide-y divide-pink-300'>
        <Intro />
        <Uses />
        <Timeline />
      </div>
    </>
  );
}
