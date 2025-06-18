import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type DarkModeStateTypes ={
     isDarkMode: boolean,
     toggleDarkMode: () => void,
     setDarkMode: (value: boolean) => void
}

const useDarkModeStore = create( 
     persist<DarkModeStateTypes>((set) => ({
     isDarkMode: false,
     toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
     setDarkMode: (value: boolean) => set({ isDarkMode: value }),
}),
     {
          name: 'dark-mode-storage', // Key for localStorage
     }
),

) 

export default useDarkModeStore