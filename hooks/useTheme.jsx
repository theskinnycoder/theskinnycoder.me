import useStore from '@/utils/useStore';

const useTheme = () => {
  const theme = useStore((state) => state.theme);
  const setThemeTo = useStore((state) => state.setThemeTo);
  return { theme, setThemeTo };
};

export default useTheme;
