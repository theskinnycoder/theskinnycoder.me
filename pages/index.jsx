import { HeroSection, RecentArticles, YouTubeSection } from '@/components/Home';
import { PageSEO } from '@/components/SEO';
import getData from '@/utils/getData';
import { GET_ALL_ARTICLES } from '@/utils/queries';
import { motion } from 'framer-motion';

const Home = ({ articles, videos }) => {
  return (
    <>
      <PageSEO name="home" description="Full-Stack Web Developer" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="dark:bg-black flex-col bg-white divide-y divide-pink-300"
      >
        <HeroSection />
        <RecentArticles articles={articles} />
        <YouTubeSection videos={videos} />
      </motion.div>
    </>
  );
};

export const getStaticProps = async () => {
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
    revalidate: 86400,
  };
};

export default Home;
