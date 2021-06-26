import create from 'zustand';

const useStore = create((set) => ({
  sidebar: false,
  darkmode: true,
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
  toggleDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
}));

export default useStore;
