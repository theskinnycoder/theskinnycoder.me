import GlobalProvider from '@/contexts/GlobalContext';
import MainLayout from '@/layouts/MainLayout';
import '@/styles/globals.css';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import SEO from '../next-seo.config';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
            />
          </Head>
          <GlobalProvider>
            <MainLayout>
              <DefaultSeo {...SEO} />
              <Component {...pageProps} />
            </MainLayout>
          </GlobalProvider>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default MyApp;
