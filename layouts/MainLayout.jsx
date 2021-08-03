import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/Micros/ScrollToTop';
import SideBar from '@/components/Sidebar';
import useDarkMode from '@/hooks/useDarkMode';

const MainLayout = ({ children }) => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <main
        className={`${
          darkMode && 'dark bg-black'
        } selection:bg-pink-300 dark:selection:bg-pink-600 font-custom text-black bg-white dark:bg-black dark:text-white tracking-tighter`}
      >
        <Header />
        <SideBar />
        <ScrollToTop />
        <section className="max-w-5xl px-3 py-5 mx-auto">{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
