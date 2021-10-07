import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const useDarkMode = () => {
  const { darkMode, toggleDarkMode } = useContext(GlobalContext);
  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
