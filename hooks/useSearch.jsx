import useStore from '@/utils/useStore';

const useSearch = () => {
  const searchText = useStore((state) => state.searchText);
  const setSearchTextTo = useStore((state) => state.setSearchTextTo);
  return { searchText, setSearchTextTo };
};

export default useSearch;
