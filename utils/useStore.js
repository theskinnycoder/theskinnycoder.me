import create from 'zustand';

const useStore = create((set) => ({
  sideBar: false,
  darkMode: true,
  searchText: '',
  theme: 'honeypot',
  setSearchText: (text) => set({ searchText: text }),
  togglesideBar: () => set((state) => ({ sideBar: !state.sideBar })),
  toggledarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setTheme: (theme) => set({ theme: theme }),
}));

export default useStore;
