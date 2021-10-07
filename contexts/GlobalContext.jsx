import { createContext, useCallback, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // Initialize all states
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState('mint');
  const [sideBar, setSideBar] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, [setDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode, setDarkMode]);

  const setThemeTo = useCallback(
    (_theme) => {
      setTheme(_theme);
    },
    [setTheme],
  );

  const toggleSideBar = useCallback(() => {
    setSideBar(!sideBar);
  }, [sideBar, setSideBar]);

  const setSearchTextTo = useCallback(
    (_searchText) => {
      setSearchText(_searchText);
    },
    [setSearchText],
  );

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        theme,
        sideBar,
        searchText,
        toggleDarkMode,
        setThemeTo,
        toggleSideBar,
        setSearchTextTo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
