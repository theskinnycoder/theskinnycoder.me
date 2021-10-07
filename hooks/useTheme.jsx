import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const useTheme = () => {
  const { theme, setThemeTo } = useContext(GlobalContext);
  return { theme, setThemeTo };
};

export default useTheme;
