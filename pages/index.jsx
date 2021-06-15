import axios from 'axios';
import { HeroSection, RecentArticles, YouTubeSection } from '../components/Home';
import client from '../utils/client';

const Home = ({ articles, videos }) => {
  return (
    <div className='dark:bg-dark dark:divide-gray-600 flex-col px-2 bg-white divide-y divide-gray-300'>
      <HeroSection />
      <RecentArticles articles={articles} />
      <YouTubeSection videos={videos} />
      {/* <ContactSection /> */}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'article' });
  const { data } = await axios(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`,
  );

  return {
    props: {
      articles: response.items,
      videos: data.items,
    },
    revalidate: 3600,
  };
};

export default Home;
