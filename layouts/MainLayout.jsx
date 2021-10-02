import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/Micros/ScrollToTop';
import SideBar from '@/components/Sidebar';
import useDarkMode from '@/hooks/useDarkMode';
import useTheme from '@/hooks/useTheme';

const MainLayout = ({ children }) => {
  const { darkMode } = useDarkMode();
  const { theme } = useTheme();

  const getThemeClass = () => {
    if (theme === 'mint') {
      return 'mint';
    } else if (theme === 'cherry') {
      return 'cherry';
    } else if (theme === 'oceanic') {
      return 'oceanic';
    } else if (theme === 'honeypot') {
      return 'honeypot';
    } else return 'baby';
  };

  return (
    <main
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
      className={`${
        darkMode && 'dark bg-black'
      } selection:bg-brand-divide dark:selection:bg-brand font-custom text-black bg-white dark:bg-black dark:text-white tracking-tighter
          ${getThemeClass()}
        `}
    >
      <Header />
      <SideBar />
      <ScrollToTop />
      <section className="max-w-5xl px-3 py-5 mx-auto overflow-x-hidden">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
