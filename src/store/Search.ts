import { create } from "zustand";

type useSearchStoreTypes = {
     search: string
     setSearch: (search:string) => void
}

const useSearchStore = create<useSearchStoreTypes>((set) => ({
     search: '',
     setSearch: (search: string) => set({search})

})
)

export default useSearchStore