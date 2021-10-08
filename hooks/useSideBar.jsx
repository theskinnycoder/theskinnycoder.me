import useStore from '@/utils/useStore';

const useSideBar = () => {
  const sideBar = useStore((state) => state.sideBar);
  const toggleSideBar = useStore((state) => state.toggleSideBar);
  return { sideBar, toggleSideBar };
};

export default useSideBar;
