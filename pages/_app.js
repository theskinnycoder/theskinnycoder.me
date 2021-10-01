import MainLayout from '@/layouts/MainLayout';
import '@/styles/globals.css';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route}>
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
