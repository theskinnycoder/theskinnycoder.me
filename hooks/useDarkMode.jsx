import useStore from '@/utils/useStore';

const useDarkMode = () => {
  const darkMode = useStore((state) => state.darkMode);
  const toggledarkMode = useStore((state) => state.toggledarkMode);
  return { darkMode, toggledarkMode };
};

export default useDarkMode;
