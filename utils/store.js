import create from "zustand"

const useStore = create((set, get) => ({
  sidebar: false,
  toggleSidebar: () => set({ sidebar: !get().sidebar })
}))

export default useStore
