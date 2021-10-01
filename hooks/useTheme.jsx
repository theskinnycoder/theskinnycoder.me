import useStore from '@/utils/useStore';

const useTheme = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);
  return { theme, setTheme };
};

export default useTheme;
