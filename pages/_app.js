import { MainLayout } from '@/layouts';
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
              content="width=device-width, initial-scale=1.0, user-scalable=no"
            />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="black-translucent"
            />
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <MainLayout>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </MainLayout>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default MyApp;
