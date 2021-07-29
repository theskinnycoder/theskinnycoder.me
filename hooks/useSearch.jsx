import useStore from '@utils/useStore';

const useSearch = () => {
  const searchText = useStore((state) => state.searchText);
  const setSearchText = useStore((state) => state.setSearchText);
  return { searchText, setSearchText };
};

export default useSearch;
