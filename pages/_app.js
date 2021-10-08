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
              content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
            />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="black-translucent"
            />
            <meta
              name="description"
              content="TheSkinnyCoder, a.k.a, Rahul SriRam, iss a developer, YouTuber and an online tutor"
            />
            <meta name="keywords" content="programming" />

            <link rel="manifest" href="/manifest.json" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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
