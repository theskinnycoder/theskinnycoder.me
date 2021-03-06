import create from 'zustand';

const useStore = create((set) => ({
  darkMode: true,
  theme: 'mint',
  sideBar: false,
  searchText: '',
  settingsMenu: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setThemeTo: (theme) => set({ theme: theme }),
  toggleSideBar: () => set((state) => ({ sideBar: !state.sideBar })),
  setSearchTextTo: (text) => set({ searchText: text }),
  toggleSettingsMenu: () =>
    set((state) => ({ settingsMenu: !state.settingsMenu })),
}));

export default useStore;
