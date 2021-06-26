import NextHead from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useStore } from '../utils';

const MainLayout = ({ children }) => {
  const darkmode = useStore((state) => state.darkmode);

  return (
    <>
      <NextHead>
        <title>TheSkinnyCoder</title>
      </NextHead>
      <main
        className={`${
          darkmode ? 'dark bg-black' : ''
        } font-custom text-black bg-white dark:bg-black dark:text-white tracking-tighter`}
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
