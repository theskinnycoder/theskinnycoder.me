import { HeroSection, RecentArticles } from '@/components/Home';
import { PageSEO } from '@/components/SEO';
import getData from '@/utils/getData';
import { GET_ALL_ARTICLES } from '@/utils/queries';

const Home = ({ articles }) => {
  return (
    <>
      <PageSEO name="home" description="Full-Stack Web Developer" />
      <div className="dark:bg-black divide-brand-divide flex-col bg-white divide-y">
        <HeroSection />
        <RecentArticles articles={articles} />
        {/* <YouTubeSection videos={videos} /> */}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const { articles } = await getData({
    url: process.env.GRAPHCMS_END_POINT,
    query: GET_ALL_ARTICLES,
  });
  // const { items: videos } = await getData({
  //   url: `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&type=video&order=date&maxResults=4`,
  // });

  return {
    props: {
      articles,
      // videos,
    },
    revalidate: 86400,
  };
};

export default Home;
