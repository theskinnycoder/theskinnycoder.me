import { Footer, Header, SideBar } from '@/components/bricks';
import { ScrollToTop } from '@/components/micros';
import { useDarkMode, useTheme } from '@/hooks';

const MainLayout = ({ children }) => {
  const { darkMode } = useDarkMode();
  const { theme } = useTheme();

  return (
    <main
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
      className={`${
        darkMode && 'dark bg-black'
      } selection:bg-brand-divide dark:selection:bg-brand font-custom text-black bg-white dark:bg-black dark:text-white tracking-tighter
          ${theme}
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
