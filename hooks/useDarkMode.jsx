import useStore from '@/utils/useStore';

const useDarkMode = () => {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
