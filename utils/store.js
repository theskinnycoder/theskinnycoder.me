import create from 'zustand';

const useStore = create((set, get) => ({
  sidebar: false,
  darkmode: true,
  toggleSidebar: () => set({ sidebar: !get().sidebar }),
  toggleDarkmode: () => set({ darkmode: !get().darkmode }),
}));

export default useStore;
