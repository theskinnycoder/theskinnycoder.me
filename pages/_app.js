import MainLayout from '@/layouts/MainLayout';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <MainLayout className="font-custom">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MainLayout>
    </AnimatePresence>
  );
};

export default MyApp;
