import useStore from '@/utils/useStore';

const useSideBar = () => {
  const sideBar = useStore((state) => state.sideBar);
  const togglesideBar = useStore((state) => state.togglesideBar);
  return { sideBar, togglesideBar };
};

export default useSideBar;
