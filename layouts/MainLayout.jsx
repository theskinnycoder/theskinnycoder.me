import NextHead from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { store as useStore } from '../utils';

const MainLayout = ({ children }) => {
  const darkmode = useStore((state) => state.darkmode);

  return (
    <>
      <NextHead>
        <title>TheSkinnyCoder</title>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
      </NextHead>
      <main
        className={`${
          darkmode ? 'dark bg-dark' : ''
        } font-display text-black bg-white dark:bg-dark dark:text-light tracking-tighter`}
      >
        <Header />
        <Sidebar />
        <section className='max-w-5xl p-8 mx-auto'>{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
