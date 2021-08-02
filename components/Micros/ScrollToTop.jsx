import useScrollToTop from '@/hooks/useScrollToTop';
import { ArrowUpIcon } from '../Icons';

const ScrollToTop = () => {
  const { makeScroll, showScroll } = useScrollToTop();
  return (
    <button
      className={`${
        showScroll ? 'hidden sm:block' : 'hidden'
      } bottom-5 xl:bottom-16 right-3.5 md:right-5 xl:right-20 fixed z-20 cursor-pointer hover:scale-105 transition duration-200 ease-in-out bg-pink-600 rounded-full p-1.5`}
      onClick={makeScroll}
    >
      <ArrowUpIcon className="xl:w-12 xl:h-12 w-7 h-7 dark:text-black text-white" />
    </button>
  );
};

export default ScrollToTop;
