import { HeroSection, RecentArticles, YouTubeSection } from '../components/Home';
import { GET_ALL_ARTICLES } from '../graphql/articles';
import { graphcms } from '../utils';

const Home = ({ articles, videos }) => {
  return (
    <div className='dark:bg-black flex-col px-3 bg-white divide-y divide-pink-300'>
      <HeroSection />
      <RecentArticles articles={articles} />
      <YouTubeSection videos={videos} />
      {/* <ContactSection /> */}
    </div>
  );
};

export const getStaticProps = async () => {
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
};

export default Home;
