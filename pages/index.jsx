import { NextSeo } from 'next-seo';
import { HeroSection, RecentArticles, SnowAnimation, YouTubeSection } from '../components/Home';
import { GET_ALL_ARTICLES } from '../graphql/articles';
import { graphcms, useStore } from '../utils';

export default function Home({ articles, videos }) {
  const url = 'https://theskinnycoder.me/';
  const title = 'Home | TheSkinnyCoder';
  const description = 'Full-Stack Web Developer';

  const darkmode = useStore((state) => state.darkmode);
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
      {darkmode && <SnowAnimation />}
      <div className='dark:bg-black flex-col px-3 bg-white divide-y divide-pink-300'>
        <HeroSection />
        <RecentArticles articles={articles} />
        <YouTubeSection videos={videos} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { articles } = await graphcms.request(GET_ALL_ARTICLES);
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`,
  );
  const data = await res.json();

  return {
    props: {
      articles,
      videos: data.items,
    },
    revalidate: 3600,
  };
}
