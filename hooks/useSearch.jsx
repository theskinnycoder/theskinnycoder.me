import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const useSearch = () => {
  const { searchText, setSearchTextTo } = useContext(GlobalContext);
  return { searchText, setSearchTextTo };
};

export default useSearch;
