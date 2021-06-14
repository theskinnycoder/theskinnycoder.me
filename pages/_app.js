import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';
import useStore from '../utils/store';

function MyApp({ Component, pageProps }) {
  const darkmode = useStore((state) => state.darkmode);
  return (
    <>
      <Head>
        <title>TheSkinnyCoder</title>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
      </Head>
      <div
        className={`font-display text-black bg-white dark:bg-dark dark:text-light tracking-tighter ${
          darkmode ? 'dark' : ''
        }`}
      >
        <Header />
        <Sidebar />
        <div className='flex flex-col min-h-screen mt-10'>
          <div className='container flex-grow'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
