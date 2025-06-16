import { create } from 'zustand'

type DarkModeStateTypes ={
     isDarkMode: boolean,
     toggleDarkMode: () => void,
     setDarkMode: (value: boolean) => void
}

const useDarkModeStore = create<DarkModeStateTypes>((set) => ({
     isDarkMode: false,
     toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
     setDarkMode: (value: boolean) => set({ isDarkMode: value }),
})) 

export default useDarkModeStore