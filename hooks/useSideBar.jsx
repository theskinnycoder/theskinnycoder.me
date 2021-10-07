import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const useSideBar = () => {
  const { sideBar, toggleSideBar } = useContext(GlobalContext);
  return { sideBar, toggleSideBar };
};

export default useSideBar;
