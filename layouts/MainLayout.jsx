import Footer from '@components/Footer';
import Header from '@components/Header';
import SideBar from '@components/Sidebar';
import useDarkMode from '@hooks/useDarkMode';

export default function MainLayout({ children }) {
  const { darkMode } = useDarkMode();

  return (
    <>
      <main
        className={`${
          darkMode ? 'dark bg-black' : ''
        } font-custom text-black bg-white dark:bg-black dark:text-white tracking-tighter`}
      >
        <Header />
        <SideBar />
        <section className="max-w-5xl px-3 py-5 mx-auto">{children}</section>
        <Footer />
      </main>
    </>
  );
}
