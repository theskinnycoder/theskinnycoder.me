import MainLayout from '@layouts/MainLayout';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout className='font-custom'>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MainLayout>
  );
}
