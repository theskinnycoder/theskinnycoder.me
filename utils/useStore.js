import create from 'zustand';

const useStore = create((set) => ({
  sideBar: false,
  darkMode: true,
  togglesideBar: () => set((state) => ({ sideBar: !state.sideBar })),
  toggledarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useStore;
