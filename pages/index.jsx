import {
  HeroSection,
  RecentArticles,
  SnowAnimation,
  YouTubeSection,
} from '@components/Home';
import { PageSEO } from '@components/SEO';
import useDarkMode from '@hooks/useDarkMode';
import getData from '@utils/getData';
import { GET_ALL_ARTICLES } from '@utils/queries';

export default function Home({ articles, videos }) {
  const { darkMode } = useDarkMode();
  return (
    <>
      <PageSEO name="home" description="Full-Stack Web Developer" />
      {darkMode && <SnowAnimation />}
      <div className="dark:bg-black flex-col bg-white divide-y divide-pink-300">
        <HeroSection />
        <RecentArticles articles={articles} />
        <YouTubeSection videos={videos} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { articles } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_ARTICLES,
  });
  const { items: videos } = await getData({
    url: `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`,
  });

  return {
    props: {
      articles,
      videos,
    },
    revalidate: 3600,
  };
}
