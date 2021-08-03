import MainLayout from '@/layouts/MainLayout';
import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const MyApp = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
